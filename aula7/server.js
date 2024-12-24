const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true })); 
app.use(routes); //Meu app vai usar as rotas que estão no arquivo routes.js
app.use(express.static(path.resolve(__dirname, 'public'))); //Definição de um middleware para servir arquivos estáticos
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); //Definição de uma view engine, no caso, o EJS, para a renderização de HTML
//Algo semelhante ao Django, que usa o Jinja2

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando na porta 3000');
});