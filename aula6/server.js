const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true })); 
app.use(routes); //Meu app vai usar as rotas que estão no arquivo routes.js

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando na porta 3000');
});