const nome = 'Lucas';
const sobrenome = 'Zanini';

const falaNome = () => {
  console.log(`Meu nome é ${nome} ${sobrenome}`);
};

console.log(module) 

//Retorna o seguinte Objeto:

/*

{
  id: '.',
  path: 'c:\\Curso_Node\\aula1',
  exports: {},
  filename: 'c:\\Curso_Node\\aula1\\modules.js',
  loaded: false,
  children: [],
  paths: [
    'c:\\Curso_Node\\aula1\\node_modules',
    'c:\\Curso_Node\\node_modules',
    'c:\\node_modules'
  ]
}


*/


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

console.log(module.exports)

//Retorna o seguinte Objeto:

/*
{
  nome: 'Lucas',
  sobrenome: 'Zanini',
  falaNome: [Function: falaNome]
}
*/  

//  Eu não preciso do module, apenas do export já irá funcionar;
//Eu posso muudar o nome do módulo exportado;

exports.NOME = nome;
exports.sobrenome = sobrenome;
this.falaNome = falaNome; //Posso utilizar a palavra reservada "this" para exportar o módulo;