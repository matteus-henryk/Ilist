function deletarItem(posicao) {
  itensDaLista.splice(posicao, 1);

  renderizarLista();
  saveToStorage();

}