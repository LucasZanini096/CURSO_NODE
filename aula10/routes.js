const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');


//Middleware são funções que interceptam o request e o response, ou seja, são funções que são executadas antes da resposta final do servidor.
// function meuMiddleware(req, res, next) {
//   console.log();
//   console.log('Passei no seu middleware.');
//   console.log();
//   next();  //Next é uma função que chama o próximo middleware ou rota, ou seja, se não tiver o next, a aplicação vai parar nesse middleware.
// }

//Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
