// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 30;
var idadeIrma = 37;

if (minhaIdade > idadeIrma) {
  console.log('É maior');
} else if (minhaIdade == idadeIrma) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2)
console.log(expressao);
// Resposta: 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy
console.log(`Nome ${!!nome}, idade ${!!idade}, Possui Doutorado ${!!possuiDoutorado}, Emprego Futuro ${!!empregoFuturo}, dinheiro na conta ${!!dinheiroNaConta}`)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('O Brasil é mais populoso.');
} else if (brasil === china) {
  console.log('Possuem a mesma população');
} else {
  console.log('O Brasil possui uma população menor que a China');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Resposta: Falso.

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// Resposta: Cão, pois é o último Truthy que aparece no código.