import BotaoDeleta from './components/BotaoDeletar.js';
import BotaoConcluir from './components/BotaoConcluir.js';
import criarItemLista from './criarItemLista.js'

const botaoNomeLista = document.querySelector('[data-form-name-button]');

const criarLista = (evento) => {
  evento.preventDefault();

  const inputNomeLista = document.querySelector('[data-form-name]');
  const ul = document.querySelector('[data-lista]');

  const valorInput = inputNomeLista.value;

  const itemLista = criarItemLista();
  const conteudo = `<p class="content">${valorInput}</p>`;
  itemLista.innerHTML = conteudo;

  itemLista.appendChild(BotaoConcluir());
  itemLista.appendChild(BotaoDeleta());

  ul.appendChild(itemLista);

  inputNomeLista.value = '';
};

botaoNomeLista.addEventListener('click', criarLista);