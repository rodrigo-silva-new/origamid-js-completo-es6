// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//   {
//     descricao: "Taxa do Pão",
//     valor: "R$ 39",
//   },
//   {
//     descricao: "Taxa do Mercado",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 99",
//   },
//   {
//     descricao: "Taxa do Banco",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 49",
//   },
// ];

let somaTaxas = 0;
let somaRecebimentos = 0;

transacoes.forEach((item) => {
  if (item.descricao.slice(0, 4) === "Taxa") {
    somaTaxas += Number(item.valor.slice(3));
  } else {
    somaRecebimentos += Number(item.valor.slice(3));
  }
});

console.log(`Taxas: ${somaTaxas} // Recebimentos: ${somaRecebimentos}`);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const novoTransportes = transportes.split(";");
console.log(novoTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

const novoHtml = html.replace(/[span]+/g, "a");
console.log(novoHtml);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
const ultimoCaractere = frase.slice(-1);
console.log(ultimoCaractere);

// Retorne o total de taxas
const transacoes = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
