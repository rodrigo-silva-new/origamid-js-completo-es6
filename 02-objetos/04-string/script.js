// const comida = "Pizza";
// const agua = new String("Agua");

// console.log(comida.length);

// const frase = "A melhor linguagem é ";
// const linguagem = "JavaScript";

// console.log(frase[0]);
// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(frase.length - 1));

// const fraseFinal = frase + linguagem;
// const fraseFinal = frase.concat(linguagem, "!!", "Oi asdkfasdf");

// const fruta = "Banana";
// const listaFrutas = "Melancia, Banana, Laranja";

// console.log(listaFrutas.includes(fruta));
// console.log(listaFrutas.includes(fruta, 14));

// console.log(fruta.startsWith("Ba"));
// console.log(fruta.endsWith("na"));

// const transacao1 = "Depósito de cliente";
// const transacao2 = "Depósito de fornecedor";
// const transacao3 = "Taxa de camisas";

// console.log(transacao1.slice(0, 3)); // Dep
// console.log(transacao2.slice(0, 3)); // Dep
// console.log(transacao3.slice(0, 3)); // Tax

// console.log(transacao1.slice(3));
// console.log(transacao1.slice(0, -1));
// console.log(transacao1.slice(-5));

// console.log(transacao1.slice(12)); // cliente
// console.log(transacao1.slice(-4)); // ente
// console.log(transacao1.slice(3, 6)); // ósi

// console.log(fruta.lastIndexOf("na"));

// const preco = "R$  99,00";

// const listaPrecos = ["R$ 99", "R$ 199"];
// console.log()

// listaPrecos.forEach(item) => {
//   console.log(item.padStart(10));
// }

const frase2 = "Ta";

frase2.repeat(5);

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Sias";
listaItens = listaItens.replace(/[ ]+/g, ", "); // Regular Expression
// listaItens = listaItens.replace(" ", ", "); // sem regular expressoin, só aplica no primeiro

const arrayLista = listaItens.split(", ");

console.log(arrayLista);

const htmlText = "<div>O melhor item </div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("ssection");

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ["Banana", "Melancia", "Laranja"];

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo1.toLowerCase() === "feminino");

const valor = " R$ 23,00 ";
valor.trim();
valor.trimStart();
valor.trimEnd();
