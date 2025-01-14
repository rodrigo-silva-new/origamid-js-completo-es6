// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img');
const firstImgHeight = firstImg.offsetTop;
console.log(firstImgHeight);

// Retorne a soma da largura de todas as imagens
const allImgs = document.querySelectorAll('img');
let somaImgsLarguras = 0;
let result = allImgs.forEach(image => somaImgsLarguras += image.getBoundingClientRect().width);
console.log(somaImgsLarguras);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const allLinks = document.querySelectorAll('a');
allLinks.forEach((link, index) => {
  console.log(`${index} ----> ${(link.getBoundingClientRect().width) >= 48 && (link.getBoundingClientRect().height) >= 37}`);
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const rightWidth = window.matchMedia('(max-width: 719px)').matches;

if (rightWidth) {
  document.querySelector('.menu').classList.add('menu-mobile');
}