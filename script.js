// 
// Menu mobile: abre e fecha a navegação em telas estreitas

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('nav-links--open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em um link
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('nav-links--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Envio do formulário de agendamento (placeholder — sem backend conectado)
  const form = document.querySelector('#agende form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Obrigado! Recebemos seu pedido de visita e entraremos em contato em breve.');
      form.reset();
    });
  }
});

