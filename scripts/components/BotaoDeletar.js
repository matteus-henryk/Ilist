const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button');
  botaoDeleta.classList.add('botao-deleta-lista');
  botaoDeleta.textContent = 'Deletar';
  return botaoDeleta;
};