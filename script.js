const treatments = {
  relajacion: {
    label: 'Masaje relajante',
    kicker: 'Para desconectarte del día',
    title: ['MENOS RUIDO.', 'MÁS CALMA.'],
    description: 'Movimientos suaves y un ritmo tranquilo para descansar y disfrutar el momento.',
  },
  descontracturante: {
    label: 'Masaje descontracturante',
    kicker: 'Para prestar atención a la tensión',
    title: ['SUELTA LA TENSIÓN.', 'CUIDA TU CUERPO.'],
    description: 'Trabajo localizado en las zonas donde sientes tensión. La presión se adapta a tu comodidad durante la sesión.',
  },
  reductivo: {
    label: 'Masaje reductivo', kicker: 'Cuidado corporal',
    title: ['UN MOMENTO', 'PARA TU CUERPO.'],
    description: 'Trabajo corporal enfocado en zonas específicas, según lo que quieras trabajar. Conversa con Leslie para definir tu sesión.',
  },
  drenaje: {
    label: 'Drenaje linfático manual', kicker: 'Atención manual',
    title: ['CUIDADO', 'CON LAS MANOS.'],
    description: 'Movimientos suaves y rítmicos sobre el cuerpo. Consulta con Leslie los detalles de la sesión antes de coordinar tu hora.',
  },
  gluteo: {
    label: 'Levantamiento de glúteo', kicker: 'Cuidado corporal',
    title: ['ATENCIÓN', 'PERSONALIZADA.'],
    description: 'Trabajo focalizado en la zona de los glúteos. Consulta con Leslie el enfoque de la sesión y los detalles de la atención.',
  },
  deportivo: {
    label: 'Masaje deportivo', kicker: 'Masoterapia deportiva',
    title: ['TU ACTIVIDAD.', 'TU MOMENTO.'],
    description: 'Atención enfocada en los músculos que usas al entrenar. Comparte con Leslie tu actividad y las zonas que te gustaría trabajar.',
  },
  shantala: {
    label: 'Shantala (bebé)', kicker: 'Masaje infantil',
    title: ['UN MOMENTO', 'DE CONEXIÓN.'],
    description: 'Masaje suave para compartir un momento con tu bebé. Consulta con Leslie cómo se realiza la atención y qué considerar antes de agendar.',
  },
  embarazo: {
    label: 'Masaje en el embarazo', kicker: 'Una etapa especial',
    title: ['CUIDADO', 'EN TU ETAPA.'],
    description: 'Una sesión que considera tu etapa de embarazo y tu comodidad. Conversa con Leslie antes de agendar para coordinar la atención.',
  },
};
const whatsappIcon = '<svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.93 9.93 0 0 0-8.58 14.94L2 22l5.2-1.36A9.99 9.99 0 1 0 12.04 2Zm0 18.2a8.14 8.14 0 0 1-4.16-1.14l-.3-.18-3.09.81.82-3.01-.2-.31a8.2 8.2 0 1 1 6.93 3.83Zm4.5-6.14c-.25-.12-1.46-.72-1.68-.8-.23-.08-.4-.12-.56.13-.16.24-.63.79-.77.95-.14.17-.29.19-.53.07-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.66.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.52.59.18 1.13.15 1.56.09.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.1-.22-.16-.47-.28Z"/></svg>';
const dialog = document.querySelector('#booking');
const formView = document.querySelector('#booking-form-view');
const successView = document.querySelector('#booking-success');
let selectedTreatment = 'relajacion';
let bookingTrigger;

function whatsappURL(message = `Hola, me gustaría agendar una hora para ${treatments[selectedTreatment].label.toLowerCase()}. ¿Me compartes los valores y horarios disponibles?`) {
  const number = String(window.LESLIEMASAI_CONFIG?.whatsappNumber ?? '').replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function updateWhatsappLink() {
  document.querySelector('#whatsapp-link').href = whatsappURL();
  document.querySelector('#whatsapp-floating').href = whatsappURL('Hola Leslie, me gustaría consultar por tus servicios de masoterapia.');
}
function selectTreatment(key) {
  selectedTreatment = key;
  const treatment = treatments[key];
  document.querySelectorAll('[data-treatment]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.treatment === key)));
  document.querySelector('#treatment-kicker').textContent = treatment.kicker;
  const title = document.querySelector('#treatment-title');
  title.replaceChildren(document.createTextNode(treatment.title[0]), document.createElement('br'), document.createTextNode(treatment.title[1]));
  document.querySelector('#treatment-description').textContent = treatment.description;
  updateWhatsappLink();
}
function showForm() {
  formView.hidden = false;
  successView.hidden = true;
  dialog.setAttribute('aria-labelledby', 'booking-title');
  dialog.setAttribute('aria-describedby', 'booking-note');
}
document.querySelectorAll('[data-treatment]').forEach(button => button.addEventListener('click', () => selectTreatment(button.dataset.treatment)));
document.querySelectorAll('[data-book]').forEach(button => button.addEventListener('click', () => {
  bookingTrigger = button;
  showForm();
  dialog.showModal();
}));
document.querySelector('.close-button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => bookingTrigger?.focus());
document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const url = whatsappURL();
  const openedWindow = window.open(url, '_blank');
  if (openedWindow) openedWindow.opener = null;
  document.querySelector('#booking-summary').textContent = treatments[selectedTreatment].label;
  const retry = document.querySelector('#whatsapp-retry');
  retry.href = url;
  formView.hidden = true;
  successView.hidden = false;
  dialog.setAttribute('aria-labelledby', 'booking-success-title');
  dialog.setAttribute('aria-describedby', 'booking-summary');
  document.querySelector('#booking-success-title').focus();
});
document.querySelector('#booking-back').addEventListener('click', () => { showForm(); document.querySelector('#booking-form button').focus(); });
document.querySelectorAll('[data-whatsapp-icon]').forEach(element => element.innerHTML = whatsappIcon);
updateWhatsappLink();

const instagramUsername = String(window.LESLIEMASAI_CONFIG?.instagramUsername ?? 'lesliemasai').trim().replace(/^@/, '');
document.querySelectorAll('#instagram-link, [data-instagram-link]').forEach(link => {
  link.href = `https://www.instagram.com/${encodeURIComponent(instagramUsername)}/`;
});
