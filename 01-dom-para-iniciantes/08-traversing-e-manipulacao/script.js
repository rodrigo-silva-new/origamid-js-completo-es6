/*
const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

h1.innerHTML = '<p>Novo Título</p>'

console.log(animaisLista.innerHTML);
*/







/*
const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement.parentElement.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);
// console.log(lista.children);
// console.log(lista.querySelector('li:last-child'));
// console.log(lista.childNodes);
console.log(lista.previousSibling);
*/








/*
const lista = document.querySelector('.animais-lista');

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

const mapa = document.querySelector('.mapa');

// contato.removeChild(titulo);
contato.replaceChild(mapa, titulo);

// animais.appendChild(titulo);
contato.insertBefore(animais, mapa);


const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo Título';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1)

console.log(novoh1);
*/











const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

faq.appendChild(cloneH1);