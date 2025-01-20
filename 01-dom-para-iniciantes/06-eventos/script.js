const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

// img.addEventListener('click', callback);






const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(this);
}

animaisLista.addEventListener('click', callbackLista);








const linkExterno = document.querySelector('a[href^=http]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log('clicou');
}

linkExterno.addEventListener('click', handleLinkExterno);










function handleKeyboard(event) {
  if (event.key === 'a') {
    document.body.classList.toggle('azul');
  }
}

window.addEventListener('keydown', handleKeyboard);