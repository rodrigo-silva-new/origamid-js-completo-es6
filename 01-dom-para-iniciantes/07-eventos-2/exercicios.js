// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const internLinks = document.querySelectorAll('a[href^="#"]');

function checkLinks(event) {
  event.preventDefault();
  internLinks.forEach(item => item.classList.remove('ativo'));
  this.classList.add('ativo');
}

internLinks.forEach(link => link.addEventListener('click', checkLinks));


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
/*
const allElements = document.querySelectorAll('body *');

function showElement(e) {
  console.log(e.currentTarget);
}

allElements.forEach(item => item.addEventListener('click', showElement));
*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
/*
const allElements = document.querySelectorAll('body *');

function showElement(e) {
  e.currentTarget.remove();
}

allElements.forEach(item => item.addEventListener('click', showElement));
*/


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
  console.log(event.key);
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleClickT);