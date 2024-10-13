var pessoa = {
  nome: 'André',
  idade: 28,
}

console.log(pessoa.idade)










var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());











var height = 100;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';
menu.color = 'blue';
menu.esconder = function() {
  console.log('Esconder');
}

var bg = menu.backgroundColor;