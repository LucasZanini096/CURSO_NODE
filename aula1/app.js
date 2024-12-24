
//Sintaxe para a importação de um módulo do module.js
const Module = require('./modules.js');

//Posso utilizar o meio de desestruturação para acessar as propriedades do módulo

const {nome, sobrenome, falaNome} = require('./modules.js');
console.log(nome);
console.log(sobrenome);
falaNome();

//Module.falaNome();

const { Pessoa } = require('./modules2.js');

const lucas = new Pessoa('Lucas', 'Zanini');

console.log(lucas);