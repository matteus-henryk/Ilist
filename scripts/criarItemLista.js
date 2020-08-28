const criarItemLista = (evento) => {
  const itemLista = document.createElement('li');
  itemLista.classList.add('lista-item');

  return itemLista;
};

export default criarItemLista;