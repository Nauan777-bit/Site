// Alerta ao clicar nas matérias com animação
document.querySelectorAll('.subject-list li').forEach(item => {
  item.addEventListener('click', () => {
    alert("Você clicou em " + item.textContent + "!");
    item.style.transform = "scale(0.95)";
    setTimeout(() => {
      item.style.transform = "scale(1)";
    }, 150);
  });
});

// Scroll suave ao clicar nos links do menu
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Alternar tema claro/escuro
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Tema Claro"
    : "🌙 Tema Escuro";
});

// Mensagem de boas-vindas após 1.5s
setTimeout(() => {
  alert("Bem-vindo ao meu site! 🚀");
}, 1500);
