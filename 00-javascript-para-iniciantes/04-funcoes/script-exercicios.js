// Crie uma função para verificar se um valor é Truthy
function truthyOrFalsy(value) {
  return !!value;
}

console.log(truthyOrFalsy(''));
console.log(truthyOrFalsy('oi'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculaPerimetro(lado) {
  const perimetro = lado * 4;
  return perimetro;
}
console.log(calculaPerimetro(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function completeName(name, sirname) {
  const fullName = `${name} ${sirname}`;
  return fullName;
}

console.log(completeName('Rodrigo', 'Silva'));

// Crie uma função que verifica se um número é par
function isNumberEven(number) {
  if (number % 2 === 0) {
    return 'O número é par';
  } else {
    return 'O número é ímpar';
  }
}

console.log(isNumberEven(2));
console.log(isNumberEven(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verifyType(value) {
  const valueType = typeof value;
  return valueType;
}

console.log(verifyType(3));
console.log(verifyType(false));
console.log(verifyType('testando'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() { console.log(completeName('Rodrigo', 'Silva')) });

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
