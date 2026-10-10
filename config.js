// Configuración pública para abrir index.html directamente sin compilar.
// La versión compilada usa .env y genera su propio dist/config.js.
// Escribe el número con código de país, sin +, espacios ni guiones.
// Formato Chile: 56 + 9 + los 8 dígitos del celular.
// Vacío: WhatsApp permite elegir el contacto. Con número: abre su chat directo.
window.LESLIEMASAI_CONFIG = {
  whatsappNumber: "56933932134",
  // Usuario de Instagram, sin @. Editable junto con el número.
  instagramUsername: "lesliemasai",
};
