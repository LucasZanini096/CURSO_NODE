class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
  }
}

const nome = 'Lucas'
const sobrenome = 'Zanini'

module.exports = {nome, sobrenome, Pessoa}