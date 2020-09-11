const mensagemErro = () => {
  const divCabecalho = document.querySelector('[data-div]');

  const classeErro = 'erro'
  const erroExiste = document.querySelector(`.${classeErro}`)

  const erro = erroExiste || document.createElement('span');
  erro.classList.add(`${classeErro}`);
  erro.classList
  const conteudo = '* O campo não pode estar vazio!';
  erro.innerText = conteudo;

  divCabecalho.appendChild(erro);
}

const removeMensagemErro = () => {
  const classeErro = 'erro'
  erroExiste = document.querySelector(`.${classeErro}`);
  if(erroExiste){
    erroExiste.remove();
  }else{
    return;
  }
}