console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5));
console.log(Number.isNaN("texto"));

console.log(Number.isInteger(NaN));
console.log(Number.isInteger(5));
console.log(Number.isInteger("texto"));

console.log(parseFloat("32434.4343"));
console.log(parseFloat("100 reais"));
console.log(parseInt(23.49));

const preco = 10.32323;
console.log(preco.toFixed(2));

let valor = 48.49;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(valor);

let valor2 = 48.49;
valor2 = valor2.toLocaleString("en-US", { style: "currency", currency: "USD" });
console.log(valor2);

console.log(Math.PI);
console.log(Math.abs(-5.5));
console.log(Math.ceil(4.8334));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.8334));
console.log(Math.floor(4.3));
console.log(Math.round(4.8334));
console.log(Math.round(4.3));
console.log(Math.max(4, 43, 5, 3, 13, 5, 65, 343));
console.log(Math.min(4, 43, 5, 3, 13, 5, 65, 343));

// Random:E
console.log(Math.random());
console.log(Math.random() * 100);
console.log(Math.random() * 500);

const aleatorio = Math.floor(Math.random() + 10);
console.log(aleatorio);
