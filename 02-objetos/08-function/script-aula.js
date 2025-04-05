/* ==========================================================
Propriedades
========================================================== */
// Function.length retorna o total de argumentos da função;
// Function.name retorna uma string com o nome da função;
// const perimetro = new Function('lado', 'return lado * 4');

// function somar(n1, n2) {
//   return n1 + n2 + '';
// }

// console.log(somar(3, 3).charAt(0));















/* ==========================================================
function.call()
========================================================== */
// function.call(this, arg1, arg2, ...) executa a função sendo possível passarmos uma nova referência ao this da mesma;

// function darOi(nome, idade) {
//   console.log('oi pra você' + nome + idade);
// }

// darOi.call(null, 'André', 28);


// function descricaoCArro() {
//   console.log(this);
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCArro();





// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];

// frutas.forEach.call(carros, (item) => {
//   console.log(item);
// })



// Exemplo Real:
// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// }

// const ul = new Dom('ul');

// const li = {
//   element: document.querySelector('li'),
// }

// ul.ativo.call(li, 'ativar');
// // ul.ativo.call(null, 'ativar');
// ul.ativo('ativar');

// console.log(ul);






const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);
frutas.pop();



const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3,
}

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
  console.log(item);
});

console.log(filtro);
console.log(li);