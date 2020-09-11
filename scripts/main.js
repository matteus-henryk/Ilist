var itensDaLista = JSON.parse(localStorage.getItem('itens_lista')) || [];

console.log(itensDaLista)

renderizarLista(itensDaLista)

const adicionarItem = () => {
  const inputNomeLista = document.querySelector('[data-form-name]');
  
  if(inputNomeLista.value == ''){
    alert('O campo está vazio!');
    return;
  }

  itensDaLista.push(inputNomeLista.value)
  renderizarLista(itensDaLista);
  saveToStorage();

  inputNomeLista.value = '';
};
