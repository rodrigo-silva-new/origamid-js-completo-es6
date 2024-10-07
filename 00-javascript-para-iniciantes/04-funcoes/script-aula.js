function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(pi());


function imc(peso, altura) {
  var imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(80, 1.8));


function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mar';
  } else {
    return 'Eu não gosto de cores';
  }
}


function mostraConsole() {
  console.log('oi');
}

addEventListener('click', function() { mostraConsole() });








function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(20, 1.8); // undefined


function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número'
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));









var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}


console.log(totalPaises);








var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designner'
// outrosDados(); // retorna um erro