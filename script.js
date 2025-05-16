// Função de feedback visual ao clicar em matérias
document.querySelectorAll('.subject-list li').forEach(item => {
  item.addEventListener('click', () => {
    showModal("Você clicou em: <strong>" + item.textContent + "</strong>");

    item.classList.add('clicked');
    setTimeout(() => item.classList.remove('clicked'), 200);

    // Som opcional ao clicar
    // new Audio('click.mp3').play();
  });
});

// Modal personalizado em vez de alert()
function showModal(message) {
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

// Scroll suave nos links do menu
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Alternar tema claro/escuro com segurança
const toggleBtn = document.getElementById("toggleTheme");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Tema Claro"
      : "🌙 Tema Escuro";
  });
}

// Mensagem de boas-vindas (sem alert intrusivo)
setTimeout(() => {
  showModal("Bem-vindo ao meu site! 🚀");
}, 1500);
