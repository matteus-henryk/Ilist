const ul = document.querySelector('[data-lista]');

const renderizarLista = () => {
  ul.innerHTML = '';

  itensDaLista.forEach(item => {
    const itemLista = document.createElement('li');
    itemLista.classList.add('lista-item');
    const conteudo = `<p class="content">${item}</p>`;
    itemLista.innerHTML = conteudo;

    var posicao = itensDaLista.indexOf(item);

    const botaoConcluir = BotaoConcluir();
    const botaoDeleta = BotaoDeleta();
    botaoDeleta.setAttribute('onclick', `deletarItem(${posicao})`)

    itemLista.appendChild(botaoConcluir);
    itemLista.appendChild(botaoDeleta);
   
    ul.appendChild(itemLista);
  })

};

