const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2left = primeiroH2.offsetLeft;

const rect = primeiroH2.getBoundingClientRect();

console.log(rect.top);

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
  window.pageXOffset
);







const small = window.matchMedia('(max-width: 600px)').matches;

if (small) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}