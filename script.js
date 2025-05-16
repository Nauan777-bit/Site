// Interatividade para a lista de matérias
document.querySelectorAll('.subject-list li').forEach(item => {
  item.addEventListener('click', () => {
    alert("Você clicou em " + item.textContent + "!");
  });
});
