// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return console.log(this.nome + " andou");
  };
}

const pessoa1 = new Pessoa("Rodrigo", 30);

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa2 = new Pessoa("João", 20);
const pessoa3 = new Pessoa("Maria", 25);
const pessoa4 = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elements) {
  this.elements = document.querySelectorAll(elements);
  this.adicionaClass = function (nomeClasse) {
    this.elements.forEach((elemento) => elemento.classList.add(nomeClasse));
  };
  this.removeClass = function (nomeClasse) {
    this.elements.forEach((elemento) => elemento.classList.remove(nomeClasse));
  };
}

const li = new Dom("li");
li.adicionaClass("testando");
li.removeClass("testando");
