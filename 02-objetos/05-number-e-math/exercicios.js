// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
// console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const numeros2 = numeros.split(",");
maiorNumero = Math.max(...numeros2);

// console.log(maiorNumero);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

// Minha solução:
// function limpaPrecos(array) {
//   let soma = 0;
//   array.forEach((item) => {
//     soma += parseInt(
//       item.trim().replace(/[rR$]/g, "").replace(/,/g, ".").trim()
//     );
//   });

//   console.log(soma);
// }

// limpaPrecos(listaPrecos);

// Solução do Professor:
function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});

console.log(
  soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

limparPreco(listaPrecos[3]);
