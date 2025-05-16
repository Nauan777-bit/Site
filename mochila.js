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

    // Elemento que vai mostrar o texto (ou input para edição)
    const spanTexto = document.createElement('span');
    spanTexto.textContent = item;
    spanTexto.style.flexGrow = "1";

    li.appendChild(spanTexto);

    // Botão Editar
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.style.backgroundColor = '#f39c12'; // laranja
    btnEditar.style.marginRight = '8px';
    btnEditar.setAttribute('aria-label', `Editar item ${item}`);

    // Botão Remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.setAttribute('aria-label', `Remover item ${item}`);
    btnRemover.style.backgroundColor = '#e74c3c';

    btnRemover.onclick = () => {
      li.classList.add('removendo');
      setTimeout(() => {
        mochila.splice(index, 1);
        salvarMochila();
        atualizarLista();
      }, 300);
    };

    // Função para salvar edição
    function salvarEdicao(novoValor) {
      if (novoValor.trim() === '') {
        alert('O nome do item não pode ficar vazio.');
        return false;
      }
      if (mochila.includes(novoValor) && novoValor !== item) {
        alert('Item já está na mochila.');
        return false;
      }
      mochila[index] = novoValor.trim();
      salvarMochila();
      atualizarLista();
      return true;
    }

    btnEditar.onclick = () => {
      // substituir spanTexto por input
      const inputEdicao = document.createElement('input');
      inputEdicao.type = 'text';
      inputEdicao.value = item;
      inputEdicao.style.flexGrow = "1";
      inputEdicao.style.marginRight = '10px';
      inputEdicao.setAttribute('aria-label', `Editar nome do item ${item}`);

      // Criar botão salvar e cancelar
      const btnSalvar = document.createElement('button');
      btnSalvar.textContent = 'Salvar';
      btnSalvar.style.backgroundColor = '#27ae60'; // verde
      btnSalvar.style.marginRight = '8px';

      const btnCancelar = document.createElement('button');
      btnCancelar.textContent = 'Cancelar';
      btnCancelar.style.backgroundColor = '#7f8c8d'; // cinza

      // Limpar li e adicionar os elementos de edição
      li.innerHTML = '';
      li.appendChild(inputEdicao);
      li.appendChild(btnSalvar);
      li.appendChild(btnCancelar);

      inputEdicao.focus();
      inputEdicao.select();

      // Salvar edição (botão ou tecla Enter)
      btnSalvar.onclick = () => {
        if (salvarEdicao(inputEdicao.value)) {
          // atualização já feita dentro de salvarEdicao
        }
      };

      inputEdicao.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          if (salvarEdicao(inputEdicao.value)) {
            // atualização feita
          }
        } else if (e.key === 'Escape') {
          atualizarLista(); // cancelar edição
        }
      });

      // Cancelar edição
      btnCancelar.onclick = () => {
        atualizarLista();
      };
    };

    li.appendChild(btnEditar);
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

btnAdicionar.addEventListener('click', adicionarItem);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    adicionarItem();
  }
});

carregarMochila();
atualizarLista();
input.focus();
