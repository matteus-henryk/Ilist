const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button');
  botaoDeleta.classList.add('botao-deleta-lista');
  botaoDeleta.textContent = 'Deletar';

  botaoDeleta.addEventListener('click', deletarItemLista);

  return botaoDeleta;
};

const deletarItemLista = (evento) => {
  const botaoDeleta = evento.target;

  const tarefaCompleta = botaoDeleta.parentElement;

  tarefaCompleta.classList.toggle('animacao');

  setTimeout( () => {
    tarefaCompleta.remove();

  }, 500)

  return botaoDeleta;
};

export default BotaoDeleta;