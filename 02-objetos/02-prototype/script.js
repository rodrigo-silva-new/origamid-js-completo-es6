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
