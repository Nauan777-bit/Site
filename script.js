// Função para mostrar modal personalizado
function showModal(message) {
  // Evita múltiplos modais simultâneos
  if (document.querySelector('.custom-modal.show')) return;

  const modal = document.createElement('div');
  modal.className = 'custom-modal';
  modal.innerHTML = `<div class="modal-content" role="alert" aria-live="assertive">${message}</div>`;
  document.body.appendChild(modal);

  // Força reflow para animação CSS funcionar
  void modal.offsetWidth;
  modal.classList.add('show');

  // Fecha o modal automaticamente após 2.2 segundos
  setTimeout(() => {
    modal.classList.remove('show');
    setTimeout(() => {
      if (modal.parentNode) modal.parentNode.removeChild(modal);
    }, 300);
  }, 2200);
}

// Feedback visual ao clicar ou usar teclado nas matérias
document.querySelectorAll('.subject-list li').forEach(item => {
  // Função comum para clique e teclado
  function activateItem() {
    showModal(`Você clicou em: <strong>${item.textContent}</strong>`);
    item.classList.add('clicked');
    item.setAttribute('aria-pressed', 'true');

    setTimeout(() => {
      item.classList.remove('clicked');
      item.setAttribute('aria-pressed', 'false');
    }, 200);
  }

  // Clique com mouse
  item.addEventListener('click', activateItem);

  // Suporte teclado: Enter ou Espaço
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activateItem();
    }
  });
});

// Scroll suave para navegação no menu
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href');
    const target = document.querySelector(targetID);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Para melhorar acessibilidade: foca o título da seção
      target.querySelector('h2')?.focus();
    }
  });
});

// Alternar tema claro/escuro
const toggleBtn = document.getElementById('toggleTheme');

if (toggleBtn) {
  // Definir estado inicial conforme preferências do usuário (se quiser)
  // Exemplo: tema escuro se usuário preferir no sistema
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Tema Claro';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = isDark ? '☀️ Tema Claro' : '🌙 Tema Escuro';
  });
}

// Modal de boas-vindas automático após 1 segundo
window.addEventListener('load', () => {
  setTimeout(() => {
    showModal('Bem-vindo(a) ao meu site!');
  }, 1000);
});
