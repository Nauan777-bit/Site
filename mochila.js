const mochila = [];

const input = document.getElementById('itemInput');
const btnAdicionar = document.getElementById('btnAdicionar');
const lista = document.getElementById('listaMochila');
const contador = document.getElementById('contador');

function salvarMochila() {
  localStorage.setItem('mochila', JSON.stringify(mochila));
}

function carregarMochila() {
  const dados = localStorage.getItem('mochila');
  if (dados) {
    mochila.push(...JSON.parse(dados));
  }
}

function atualizarLista() {
  lista.innerHTML = '';
  mochila.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.setAttribute('aria-label', `Remover item ${item}`);
    btnRemover.onclick = () => {
      // animação antes de remover
      li.classList.add('removendo');
      setTimeout(() => {
        mochila.splice(index, 1);
        salvarMochila();
        atualizarLista();
      }, 300);
    };

    li.appendChild(btnRemover);
    lista.appendChild(li);
  });

  contador.textContent = `Total de itens: ${mochila.length}`;
}

function adicionarItem() {
  const valor = input.value.trim();
  if (valor === '') {
    alert('Por favor, digite um item.');
    return;
  }
  if (mochila.includes(valor)) {
    alert('Item já está na mochila.');
    return;
  }
  mochila.push(valor);
  salvarMochila();
  input.value = '';
  atualizarLista();
  input.focus();
}

// Eventos
btnAdicionar.addEventListener('click', adicionarItem);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    adicionarItem();
  }
});

// Inicialização
carregarMochila();
atualizarLista();
input.focus();
