# Imágenes incorporadas

Herramienta: image_gen integrada.

## Actualización del 10-10-2026: logo original y portada de bienestar

Logo original conservado: `assets/lesliemasai-logo-original.png`, 828 × 828 px, copia exacta del archivo proporcionado. Logo activo y favicon: `assets/lesliemasai-logo.svg`. El SVG incrusta el PNG original sin modificar sus píxeles, mantiene sus canales RGB y elimina el fondo blanco mediante un filtro de alfa. Se utiliza en el encabezado y debajo del título de primera sesión, sin marco blanco. No es un trazado vectorial ni un redibujo generativo. El logo oliva descrito más abajo es una adaptación anterior y ya no aparece en la página.

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
