import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { parseEnv } from 'node:util';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
const defaults = parseEnv(await readFile(new URL('.env.example', root), 'utf8'));
let local = {};
try {
  local = parseEnv(await readFile(new URL('.env', root), 'utf8'));
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

// Solo estos datos públicos se exportan; otras variables permanecen privadas.
// Las variables de Vercel tienen prioridad sobre .env y los valores de ejemplo.
const config = {
  whatsappNumber: process.env.PUBLIC_WHATSAPP_NUMBER ?? local.PUBLIC_WHATSAPP_NUMBER ?? defaults.PUBLIC_WHATSAPP_NUMBER,
  instagramUsername: process.env.PUBLIC_INSTAGRAM_USERNAME ?? local.PUBLIC_INSTAGRAM_USERNAME ?? defaults.PUBLIC_INSTAGRAM_USERNAME,
};

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'assets']) {
  await cp(new URL(file, root), new URL(file, output), { recursive: true });
}
await writeFile(new URL('config.js', output),
  `// Generado durante la compilación. Solo contiene contactos públicos.\nwindow.LESLIEMASAI_CONFIG = ${JSON.stringify(config, null, 2)};\n`);
console.log('Sitio generado en dist/. El archivo .env no se publica.');
