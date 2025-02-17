// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const precos = [49, 99, 69, 89];

// const dados = [
//   new String("Tipo 1"),
//   ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
//   function andar(nome) {
//     console.log(nome);
//   },
// ];

// dados[2]("Ford");
// dados[1][2].cor; // azul

// const carros = new Array("Ford", "Fiat", "Honda");
// carros[2] = "Ferrari";
// carros[3] = "Kia";
// carros[20] = "Kia";

// console.log(carros.length);

// const li = document.querySelectorAll("li");

// const arrayLi = Array.from(li);

// const obj = {
//   0: "Andre",
//   1: "Rafael",
//   2: "Teste",
//   length: 3,
// };

// const objArray = Array.from(obj);

// console.log(li);
// console.log(arrayLi);

// Array.isArray(li); // false
// Array.isArray(arrayLi); // true

// Array.of(10); // [10]
// Array.of(1, 2, 3, 4); // [1,2,3,4]
// new Array(5); // [,,,,]
// Array(1, 2, 3, 4); // [1,2,3,4]

// const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];

// console.log(frutas.length);

// const instrumentos2 = ["Guitarra", "Baixo", "Violão"];
// instrumentos2.sort();

// const idades = [32, 21, 33, 43, 1, 12, 8];
// idades.sort();

// console.log(instrumentos2);
// console.log(idades);

// OUTROS METODOS
const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Kia", "Ferrari");
carros.push("Parati", "Gol");

console.log(carros);

console.log(carros.pop());
console.log(carros.shift());
console.log(carros);

console.log(carros.reverse());
