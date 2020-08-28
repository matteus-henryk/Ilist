const BotaoConcluir = () => {
  const botaoConclui = document.createElement('button');
  botaoConclui.classList.add('botao-conclui-lista');
  botaoConclui.textContent = 'Concluir';
  
  botaoConclui.addEventListener('click', concluirTarefa)

  return botaoConclui;
};

const concluirTarefa = (evento) => {
  const botaoConclui = evento.target;

  const tarefaCompleta = botaoConclui.parentElement;

  tarefaCompleta.classList.toggle('done');
};

export default BotaoConcluir;