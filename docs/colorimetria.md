# Paleta de lesliemasai

Fecha: 10-10-2026.

La paleta se basa en los tres grupos de color del logo original proporcionado: azul petróleo en la silueta, amarillo/naranja en el arco y el nombre, y verde en las hojas y lámparas. El logo contiene degradados; estos valores son tonos representativos para la interfaz, no una reproducción de todos sus píxeles.

| Color de marca | Referencia sRGB | Aplicación |
| --- | --- | --- |
| Azul petróleo | `#1E6379` | Títulos destacados, enlaces y demostraciones. El texto principal utiliza una variante más oscura, `#183C43`. |
| Naranja cálido | `#FF8525` | Botón principal de reserva, con texto petróleo oscuro. |
| Verde hoja | `#347F36` | Detalles de atención a domicilio. Para texto pequeño se utiliza `#27672C`. |

Estos tres colores forman la paleta de marca. Sus ángulos de matiz no están separados exactamente por 120°, por lo que no se presentan como una tríada cromática equidistante. Se prioriza conservar la identidad del logo sobre forzar una armonía distinta.

Los fondos son claros, con una ligera tinta verde/petróleo. El CSS expresa todos los colores mediante tokens OKLCH. Se conserva la tipografía y composición de la página existente.

Contrastes calculados a partir de los tokens actuales, convertidos a sRGB:

- Texto principal sobre fondo: 11,20:1.
- Texto secundario sobre el panel de información: 5,39:1.
- Enlace petróleo sobre fondo: 6,34:1.
- Texto del botón de reserva sobre naranja: 4,89:1; al pasar el cursor: 5,42:1.
- Texto claro sobre verde: 4,77:1.
- Texto verde oscuro sobre panel: 5,90:1.

El original de 828 × 828 px permanece intacto en `assets/lesliemasai-logo-original.png`. La página y el favicon utilizan `assets/lesliemasai-logo.svg`, que incrusta esos mismos píxeles y aplica transparencia y un ajuste local de nitidez. El archivo fuente conserva sus bytes originales y no se redibuja el logo ni se cambia su paleta. Este archivo no es un trazado vectorial del dibujo. La adaptación oliva anterior permanece como archivo histórico, sin referencias desde la página.

## Contenido

La biografía comienza con «Leslie Díaz, masoterapeuta profesional desde 2017», según lo indicado por el usuario. La atención a domicilio aparece en portada, información práctica, perfil, preguntas frecuentes, cierre y diálogo de reserva. No se inventan sectores de cobertura, costos de traslado ni condiciones de atención.

El enlace de demostraciones está debajo de la biografía y el enfoque, y se repite en el cierre. Ambos destinos se actualizan desde la configuración existente.

El certificado de capacitación no estaba incluido entre las cuatro imágenes recibidas. Su transcripción queda pendiente del documento o de sus datos; no se publican credenciales, instituciones, cursos o fechas inventados.

WhatsApp conserva el verde anterior y su hover. Instagram conserva el degradado morado/naranja anterior, por indicación del usuario. La imagen compartida del logo utiliza nitidez moderada sobre los píxeles originales, resolución de renderizado ampliada y un recorte limitado al margen vacío para retirar la línea lateral. La fuente sigue siendo de 828 × 828 px; el SVG no representa detalle vectorial nuevo.
