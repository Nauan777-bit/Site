// script.js
const subjects = [
  'Sistema Operacional',
  'Programação Web',
  'Lógica de Programação',
  'Arquitetura e Manutenção',
  'Noção de Robótica',
  'POO/Java',
  'HTML/CSS',
  'Gestão de Tempo'
];

const container = document.querySelector('.cards-container');
const input = document.getElementById('search-input');

function renderCards(list) {
  container.innerHTML = ''; // limpa
  list.forEach(text => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-subject', text);
    card.innerHTML = `<h2>${text}</h2>`;
    card.addEventListener('click', () => {
      alert(`Você clicou em: ${text}`);
    });
    container.appendChild(card);
  });
}

// Event: ao digitar, filtra e renderiza
input.addEventListener('input', () => {
  const query = input.value.trim().toLowerCase();
  if (query === '') {
    container.innerHTML = ''; // vazio quando não há pesquisa
    return;
  }
  const filtered = subjects.filter(s =>
    s.toLowerCase().includes(query)
  );
  renderCards(filtered);
});
