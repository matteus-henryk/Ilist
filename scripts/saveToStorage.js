const saveToStorage = () => {
  localStorage.setItem('itens_lista', JSON.stringify(itensDaLista));
}