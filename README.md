# lesliemasai · Mockup de masoterapia profesional

Abre `index.html` en tu navegador para ver la versión estática con los contactos de `config.js`. Todo el contenido y las imágenes son locales.

## Configuración con .env

El proyecto incluye un `.env` local, excluido de Git y de las subidas mediante Vercel CLI. En una copia nueva del repositorio, créalo con `cp .env.example .env`.

Edita estos valores en `.env`:

```dotenv
PUBLIC_WHATSAPP_NUMBER=56933932134
PUBLIC_INSTAGRAM_USERNAME=lesliemasai
```

Para WhatsApp en Chile: 56 + 9 + los 8 dígitos del celular, sin +, espacios ni guiones. Dejarlo vacío abre WhatsApp para elegir contacto. Instagram usa el nombre sin @.

Estos contactos son públicos: se incluyen en el JavaScript de la página. El prefijo `PUBLIC_` identifica los dos valores que el compilador permite exportar; no es un mecanismo automático del navegador. Otras variables no se exportan. No uses estos campos para contraseñas o tokens.

## Compilar y comprobar

Usa Node.js 24 LTS. No hay dependencias que instalar.

```sh
npm run build
python3 -m http.server 8765 --directory dist
```

Abre `http://localhost:8765`. La compilación lee `.env` y genera `dist/config.js`; publica únicamente HTML, CSS, JavaScript y `assets/`. Los cambios de `.env` requieren volver a compilar y se ven en `dist/`, no al abrir el `index.html` de la raíz.

Verificaciones automáticas: `npm test`.

## Publicar en Vercel

`vercel.json` configura `npm run build` y el directorio de salida `dist`. En la configuración del proyecto de Vercel, agrega `PUBLIC_WHATSAPP_NUMBER` y `PUBLIC_INSTAGRAM_USERNAME` para los entornos que quieras personalizar. Las variables de Vercel tienen prioridad sobre `.env`; si no existen, se usan los contactos públicos de `.env.example`. Vuelve a desplegar después de cambiar variables.

Documentación oficial: [configuración del proyecto](https://vercel.com/docs/project-configuration) y [versiones de Node.js](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

El mensaje de WhatsApp incluye el tratamiento elegido. El cuadro de agendamiento abre un borrador para coordinar la sesión; nunca se envía automáticamente. Instagram abre el perfil en una pestaña nueva.

## Tipografía

Solicitada: Futura Bold Condensed. El CSS busca primero esa fuente instalada. Alternativa local disponible en este Mac: Futura Condensed ExtraBold. No se incluye ni redistribuye una tipografía comercial. Para usar la variante exacta en cualquier dispositivo, agrega el archivo con licencia web en `assets/Futura-Bold-Condensed.woff2` y sustituye el valor `src` de `@font-face` por:

```css
src: url("assets/Futura-Bold-Condensed.woff2") format("woff2");
```

## Personalizar

- Marca y textos: `index.html`.
- Colores, proporciones y tipografía: `styles.css`.
- Tratamientos y mensajes: `script.js`.
- WhatsApp e Instagram: `.env` y volver a compilar. Para la vista directa sin compilación: `config.js`.

Marca: lesliemasai. Profesional: Leslie Díaz Rojas. Los valores se consultan por WhatsApp. Biografía y ubicación Bosque San Carlos proporcionadas por el usuario. Los ocho servicios actuales, la duración aproximada, el horario y la modalidad manual provienen del afiche entregado por el usuario. Los textos complementarios deben revisarse con la profesional. No se inventaron precios, experiencia, certificaciones ni testimonios.

Fotografía generada con la herramienta integrada Imagegen. Prompt final en [docs/imagen.md](docs/imagen.md), decisiones en [docs/diseno.md](docs/diseno.md) y comprobaciones en [docs/verificacion.md](docs/verificacion.md). Se conserva el original en [assets/masoterapia-editorial.png](assets/masoterapia-editorial.png).

Formato de enlaces: [documentación oficial de WhatsApp](https://faq.whatsapp.com/5913398998672934).

Imágenes: logo adaptado en `assets/lesliemasai-logo-olive.png` y fondo ilustrativo en `assets/masoterapia-naturaleza.png`. Prompts y procedencia en [docs/imagenes.md](docs/imagenes.md).
