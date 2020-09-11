var itensDaLista = JSON.parse(localStorage.getItem('itens_lista')) || [];

renderizarLista(itensDaLista)

const adicionarItem = () => {
  const inputNomeLista = document.querySelector('[data-form-name]');
  
  if(inputNomeLista.value == ''){
    mensagemErro();
    return;
  }else {
    removeMensagemErro();
  }

  itensDaLista.push(inputNomeLista.value)
  renderizarLista(itensDaLista);
  saveToStorage();

  inputNomeLista.value = '';
};
