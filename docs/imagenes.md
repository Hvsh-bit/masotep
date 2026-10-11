# Imágenes incorporadas

Herramienta: image_gen integrada.

## Logo HD activo y favicon compatible con Safari

Nuevo original proporcionado: `assets/lesliemasai-logo-hd-original.png`, 1600 × 1600 px, copia exacta. Activo: `assets/lesliemasai-logo-hd.png`, PNG RGBA del mismo tamaño con fondo transparente. Se exportó localmente a partir del original, retirando el mate blanco y sus bordes; no se redibujaron letras ni figuras. La mejor definición proviene de la fuente HD. No se presenta como vector ni como detalle recuperado por IA.

Se probó image_gen para el recorte, con la instrucción de retirar solo el fondo blanco, conservar el texto «Lesliemasai», colores, figuras y encuadre. El resultado generativo se descartó por alterar los bordes y no se publica.

Favicon completo: `assets/favicon.ico` (16, 32 y 48 px), `assets/favicon-32.png`, `assets/favicon-192.png` y `assets/apple-touch-icon.png` (180 px). Se incluyen enlaces explícitos PNG/ICO y `apple-touch-icon` con una nueva versión de URL para evitar reutilizar el SVG anterior. Los derivados se reducen desde el PNG HD, conservan transparencia y no simplifican el dibujo.

## Actualización anterior del 10-10-2026: logo de 828 px y portada de bienestar

Original anterior conservado: `assets/lesliemasai-logo-original.png`, 828 × 828 px, y derivado anterior `assets/lesliemasai-logo.svg`. El SVG incrusta ese PNG y elimina el fondo blanco mediante un filtro de alfa. Ambos se conservan como históricos; el PNG HD los reemplaza en la página. No es un trazado vectorial. El logo oliva descrito más abajo también es una adaptación histórica.

Foto vertical proporcionada: `assets/masoterapia-spa-original.png`, 736 × 1313 px. Se conserva intacta y se sirve en pantallas de hasta 760 px mediante `<picture>`.

Portada panorámica: `assets/masoterapia-spa-panoramica.png`, 1942 × 809 px. Adaptación generativa realizada con image_gen a partir de la foto vertical. Se amplió la escena hacia los lados y se reconstruyó detalle para un encuadre ancho; no se trata de recuperar detalle original perdido mediante una ampliación convencional. Conserva como referencia las toallas, velas, difusor, hoja, lámpara y luz cálida. Se sirve en escritorio, sin estirar la imagen. No se presenta como fotografía de la consulta de Leslie.

Instrucción aplicada: adaptar la fotografía proporcionada a una composición panorámica aproximada de 2,4:1, extender naturalmente la mesa y el ambiente hacia los lados, mantener los objetos y materiales reconocibles, mejorar claridad y exposición conservando la luz cálida, sin personas, texto ni marcas nuevas.

La imagen editorial de masaje anterior se conserva en los archivos, pero ya no se usa en la portada.

## Fondo de naturaleza

Archivo: assets/masoterapia-naturaleza.png. Fotografía ilustrativa generada, no retrato de Leslie ni fotografía de su consulta. Fondo decorativo con opacidad del 50%, desenfoque CSS de 4 px y velo salvia del 50% para asegurar lectura.

Prompt final:

Use case: photorealistic-natural. Wide editorial photograph for a professional massage therapist’s website: a professional woman wearing a sage linen uniform gives a gentle shoulder massage OVER the fully opaque cream long-sleeved shirt of an adult woman seated upright in a wooden chair. Both fully clothed, only hands and clothed shoulders in frame, faces outside crop. Beautiful airy studio surrounded by green garden foliage through open windows. Strong nature presence, softly blurred leafy garden, shallow depth of field, soft daylight, serene olive and sage tones. Wide 3:2 landscape crop, subjects and hands toward left side; calm unfocused greenery across center and right for headline overlay. No bare torso, no exposed back, no massage table, no text, no logos, no watermarks.

## Logo adaptado

Original conservado en assets/lesliemasai-logo-original.png. Adaptación en assets/lesliemasai-logo-olive.png, fondo transparente.

Prompt:

Use case: style-transfer. Edit target: provided Lesliemasai logo. Adapt this exact logo to a refined premium website in sage and olive. Preserve the recognizable standing female silhouette, open oval arc, leaf accents, three oil lamps and the exact handwritten name 'Lesliemasai'. Keep the original relative positions and identity. Convert all artwork to ONE flat muted dark olive ink color, no gradients, no shadows, no highlights, no additional ornaments. Simplify the tiny dotted decoration just enough for legibility at small size, retain major shapes. Remove the white background completely and produce actual transparent background with crisp clean edges. Crop with modest even padding around the logo. This is a restrained monochrome adaptation of the supplied logo, not a new unrelated logo.

### Nitidez de la versión anterior

El derivado anterior `assets/lesliemasai-logo.svg` incrusta el original de 828 px y declara un renderizado de 3312 px; no representa detalle nuevo. El PNG HD y los favicons PNG/ICO de la sección inicial sustituyen esta versión en todos los lugares activos.

Se descartó una restauración generada con Imagegen por alterar los contornos y presentar halos. No se integra ninguna de esas variantes.
