/* ==================================================
.forEach()
================================================== */

// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// })

// console.log(carros);



// const li = document.querySelectorAll('li');

// li.forEach((item, index) => {item.classList.add('ativa' + index)});










// const li = document.querySelectorAll('li');

// const retornoForeach = li.forEach((item, index) => {
//   item.classList.add('ativa' + index);
// });
// console.log(retornoForeach);










/* ==================================================
.map()
================================================== */
// O .map() sempre retorna uma nova Array:
// const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// console.log(novaArray);


// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map(n => n * 2);

// console.log(numerosX2);








// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min);

// const nomeAulas = aula => aula.nome;

// const arrayNomeAulas = aulas.map(nomeAulas);
// console.log(tempoAulas);
























/* ==================================================
.reduce()
================================================== */
// .reduce() diferente do .map() retorna um valor único:
// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item, index);
//   return acumulador + item;
// }, 0)







// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   if(anterior > atual)
//     return anterior
//   else
//     return atual
// }, 0)

// console.log(maiorNumero);











// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   console.log(aula.nome);
//   acumulador[index] = aula.nome;
//   return acumulador;
// })



// Passo a passo do .reduce():
// 1º
// aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//   {}[0] = 'HTML 1';
//   return {0: 'HTML 1'};
// }, {});

// // 2º
// aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//   {0: 'HTML 1'}[1] = 'HTML 2';
//   return {0: 'HTML 1', 1: 'HTML 2'};
// }, {});

// // 3º
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//   {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// }, {});

















/* ==================================================
.reduceRight()
================================================== */
// Faz o mesmo que o reduce, mas pegando o array da direita pra esquerda;
























/* ==================================================
.some() // .every()
================================================== */
// .some() = Se pelo menos um return da iteração for truthy, ele retorna true;
// .evvery() = se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false;

const frutas = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
  return item === 'Uva';
})

const every = frutas.every((item) => {
  return item === 'Uva';
})

// console.log(temUva);
console.log(every);





const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every(n => n > 3);

console.log(maiorQue3);
















/* ==================================================

================================================== */

