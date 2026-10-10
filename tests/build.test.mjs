import assert from 'node:assert/strict';
import { cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const source = new URL('../', import.meta.url);

async function buildFixture(t, localEnv, overrides = {}) {
  const root = await mkdtemp(join(tmpdir(), 'lesliemasai-build-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const file of ['scripts', 'index.html', 'styles.css', 'script.js', 'assets']) {
    await cp(new URL(file, source), join(root, file), { recursive: true });
  }
  await writeFile(join(root, '.env.example'), 'PUBLIC_WHATSAPP_NUMBER=56911111111\nPUBLIC_INSTAGRAM_USERNAME=ejemplo\n');
  if (localEnv !== undefined) await writeFile(join(root, '.env'), localEnv);
  await mkdir(join(root, 'dist'), { recursive: true });
  await writeFile(join(root, 'dist', 'old-secret.txt'), 'SHOULD_NOT_BE_PUBLISHED');
  const env = { ...process.env, ...overrides };
  for (const key of ['PUBLIC_WHATSAPP_NUMBER', 'PUBLIC_INSTAGRAM_USERNAME']) {
    if (!(key in overrides)) delete env[key];
  }
  const result = spawnSync(process.execPath, ['scripts/build.mjs'], { cwd: root, env, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const browser = { window: {} };
  runInNewContext(await readFile(join(root, 'dist', 'config.js'), 'utf8'), browser);
  return { root, config: browser.window.LESLIEMASAI_CONFIG };
}

test('build uses local contact settings and publishes only site files', async t => {
  const { root, config } = await buildFixture(t,
    'PUBLIC_WHATSAPP_NUMBER=56922222222\nPUBLIC_INSTAGRAM_USERNAME=local\nPRIVATE_TOKEN=SHOULD_NOT_BE_PUBLISHED\n');
  assert.equal(config.whatsappNumber, '56922222222');
  assert.equal(config.instagramUsername, 'local');
  assert.deepEqual(Object.keys(config).sort(), ['instagramUsername', 'whatsappNumber']);
  assert.deepEqual((await readdir(join(root, 'dist'))).sort(), ['assets', 'config.js', 'index.html', 'script.js', 'styles.css']);
  assert.equal((await readFile(join(root, 'dist', 'config.js'), 'utf8')).includes('SHOULD_NOT_BE_PUBLISHED'), false);
  assert.equal(await readFile(join(root, 'dist', 'index.html'), 'utf8'), await readFile(join(root, 'index.html'), 'utf8'));
});

test('deployment variables override local values, including an intentionally empty phone', async t => {
  const { config } = await buildFixture(t,
    'PUBLIC_WHATSAPP_NUMBER=56922222222\nPUBLIC_INSTAGRAM_USERNAME=local\n',
    { PUBLIC_WHATSAPP_NUMBER: '', PUBLIC_INSTAGRAM_USERNAME: 'production' });
  assert.equal(config.whatsappNumber, '');
  assert.equal(config.instagramUsername, 'production');
});

test('fresh checkout builds without an untracked .env using public example defaults', async t => {
  const { config } = await buildFixture(t);
  assert.equal(config.whatsappNumber, '56911111111');
  assert.equal(config.instagramUsername, 'ejemplo');
});
