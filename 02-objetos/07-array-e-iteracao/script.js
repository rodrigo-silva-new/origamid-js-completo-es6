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

























// .reduce() diferente do .map() retorna um valor único:
// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item, index);
//   return acumulador + item;
// }, 0)







const numeros = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros.reduce((anterior, atual) => {
  if(anterior > atual)
    return anterior
  else
    return atual
}, 0)

console.log(maiorNumero);