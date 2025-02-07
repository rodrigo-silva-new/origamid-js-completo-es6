function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " nadou";
};

const andre = new Pessoa("Andre", 28);

console.log(Pessoa.prototype);
console.log(andre.prototype);










const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];


const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);






const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return 'Oi';
  }
}