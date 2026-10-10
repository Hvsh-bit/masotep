# lesliemasai. Mockup de masoterapia

Landing HTML local solicitada para una masoterapeuta profesional. Marca lesliemasai proporcionada por el usuario; español neutral de Chile. Objetivo: conocer el enfoque, explorar tratamientos e iniciar una consulta por WhatsApp con mensaje preparado, sin envío automático.

## Dirección
Editorial serena y táctil. Macroestructura Poster / Marquee, navegación mínima alineada a los bordes, cierre con gran palabra de marca. Sin historial previo de Firma en este proyecto. Superficie salvia con tinta oliva, un acento oliva. Firma: composición tipográfica «Vuelve a sentirte en tu cuerpo» sobre un encuadre del trabajo de las manos y motivo de dos líneas que se encuentran, como presión y descanso.

Futura Bold Condensed es la tipografía solicitada. Se buscan sus nombres locales primero. El Mac dispone de Futura Condensed ExtraBold, que se usa como alternativa explícita. No se redistribuye la fuente de macOS. El archivo comercial exacto puede incorporarse como assets/Futura-Bold-Condensed.woff2, con su licencia web. Texto de lectura: sistema Apple, para legibilidad.

## Contenido e interacción
Portada, elección de tratamiento mediante ocho botones con contenido actualizado, presentación del enfoque, preparación de primera sesión y cierre. Reserva mediante dialog nativo con un botón directo para coordinar por WhatsApp; apertura del borrador en WhatsApp. El número entregado por el usuario está configurado en config.js. Vacío abre el selector de contactos. Sin datos de contacto, precios, títulos ni testimonios inventados.

## Criterios Apple y UX
Controles de al menos 44 px, feedback en press, navegación por teclado, foco visible, dialog con Escape y devolución del foco, movimiento reducido y transparencia reducida. Una entrada breve en portada; sin animaciones repetidas al recorrer la página.

## Verificación
HTML y JS, rutas de assets, revisión visual de escritorio y celular, cambio de tratamientos, apertura y cierre de dialog, resumen de consulta y ausencia de desbordamiento.

## Personalización de marca

La biografía proporcionada por el usuario se integra en el enfoque. Bosque San Carlos se muestra como ubicación, sin asumir una dirección exacta. Los botones sociales son verdes con forma de cápsula e íconos claros; Instagram usa un nombre de usuario editable. Se ajustan el encabezado y el pie para el nombre más largo.

## Agendamiento simplificado

Se retiraron el selector de tratamiento y las opciones de mañana/tarde del dialog por solicitud del usuario. El mensaje conserva el tratamiento elegido en la sección principal. No se pide información adicional antes de abrir WhatsApp.

## Presentación profesional

Se reemplaza la biografía con emojis y la mano decorativa por un bloque tipográfico: Leslie Díaz Rojas en Futura, rol, filosofía sin emojis y ubicación con ícono lineal. Conserva los colores, alineación y divisores de la página. Los valores se consultan por WhatsApp, como indicó el usuario; se aclara en preguntas frecuentes, cierre y agendamiento.

## Logo, naturaleza y servicios

Logo original adaptado en oliva con fondo transparente e integrado en el encabezado junto a la marca tipográfica. Botón principal “Agenda tu hora”, de 66 px de altura y mayor tipografía. Cierre con fotografía ilustrativa de masoterapia y jardín, profundidad de campo suave, opacidad al 50% y velo salvia.

Servicios del afiche: descontracturante, relajante, reductivo, drenaje linfático manual, levantamiento de glúteo, deportivo, Shantala (bebé) y embarazo. Información proporcionada: 1 hora aproximada; lunes a viernes, de 08:00 a 22:00, horario a coordinar; servicios manuales. Descripciones complementarias orientadas a consultar con Leslie, sin promesas de resultados.

## Ajuste del catálogo

Auriculoterapia retirada por indicación del usuario. Los ocho servicios incluyen una descripción breve visible bajo el nombre y un texto complementario en el panel de detalle. Retiradas las menciones a “sin máquinas”.

## Horario y protagonismo de la profesional

Horario, duración y modalidad agrupados sobre una superficie salvia con separadores. Los días y las horas se muestran en líneas distintas, con mayor tamaño para las horas. La coordinación y la consulta de valores quedan en una franja inferior del mismo bloque. En celular, los datos se apilan.

El nombre Leslie Díaz Rojas aumenta de tamaño y gana espacio horizontal. La frase de enfoque pasa a una escala menor y sus párrafos se agrupan en una columna para dar prioridad visual a la profesional.

Botón flotante de WhatsApp ajustado a 16 px del borde inferior en escritorio y 12 px en celular, sumando el área segura del dispositivo. El contenedor del icono usa centrado explícito.

## Escala tipográfica según importancia

Referencias consultadas el 09-10-2026: [QuiroHome](https://quirohome.cl/masoterapia/masoterapeuta-profesional/), [Masajes Profesionales](https://masajesprofesionales.cl/) y [Umbral Corporal](https://www.umbralcorporal.cl/). Sus contenidos presentan el servicio y accesos a la reserva, con detalles de atención en niveles secundarios. De esta comparación se adopta un criterio propio para lesliemasai: facilitar la identificación de la profesional, la elección del servicio y el contacto. Las medidas siguientes son decisiones del proyecto, no tamaños copiados de esas páginas.

Escala centralizada en variables CSS: portada 48-88 px en escritorio; nombre de Leslie 44-72 px; títulos de sección 32-48 px; frases de apoyo 24-32 px; nombres de servicios 22-26 px; horario y duración 24-30 px; lectura 16-18 px; botones principales 16 px; etiquetas y notas 14 px. En celular, portada 40-64 px, nombre 40-60 px y títulos 30-40 px. Se conserva Futura y la paleta salvia/oliva.

La portada identifica el servicio y a Leslie antes de la frase principal. Su nombre pasa a ser el encabezado de nivel 2 de la presentación; la frase de enfoque queda en nivel 3. Se reducen el cierre y la marca decorativa del pie para mantener el peso visual de los servicios y la reserva. Los botones sociales reducen sus espacios interiores en celular para acomodar las etiquetas.

## Identidad y alineación de la reserva

Textos alineados con Leslie Díaz Rojas y lesliemasai en portada, servicios y primera sesión. La configuración compartida se llama `LESLIEMASAI_CONFIG` tanto en su declaración como en sus consumidores y en el ejemplo del README. El botón de reserva de portada usa un ancho máximo de 320 px, márgenes horizontales automáticos y texto centrado, con espacio simétrico para la flecha.
