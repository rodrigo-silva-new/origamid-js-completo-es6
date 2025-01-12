// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img');
console.log(allImages);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const allImagem = document.querySelectorAll('[src^="img/imagem"]');
console.log(allImagem);

// Selecione todos os links internos (onde o href começa com #)
const allInternLinks = document.querySelectorAll('[href^="#"]');
console.log(allInternLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

// Selecione o último p do site
const lastP = document.querySelector('p:last-of-type');
const lastP2 = document.querySelectorAll('p');
const newLastP = Array.from(lastP2);
console.log(lastP);
console.log(newLastP[newLastP.length - 1]);
console.log(newLastP.at(-1));
