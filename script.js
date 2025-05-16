// Feedback visual ao clicar em matérias
document.querySelectorAll('.subject-list li').forEach(item => {
  item.addEventListener('click', () => {
    showModal("Você clicou em: <strong>" + item.textContent + "</strong>");

    item.classList.add('clicked');
    setTimeout(() => item.classList.remove('clicked'), 200);

    // Som opcional
    // new Audio('click.mp3').play();
  });
});

// Modal personalizado
function showModal(message) {
  // Evita mostrar vários modais ao mesmo tempo
  if (document.querySelector('.custom-modal.show')) return;

  let modal = document.createElement('div');
  modal.className = 'custom-modal';
  modal.innerHTML = `<div class="modal-content">${message}</div>`;

  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('show'), 10);

  setTimeout(() => {
    modal.classList.remove('show');
    setTimeout(() => document.body.removeChild(modal), 300);
  }, 2200);
}

// Scroll suave para seções
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Alternar tema claro/escuro
const toggleBtn = document.getElementById("toggleTheme");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Tema Claro"
      : "🌙 Tema Escuro";
  });
}

// Modal de boas-vindas automático
setTimeout(() => {
  showModal("Bem-vindo(a) ao meu site!");
}, 1000);
