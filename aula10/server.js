require('dotenv').config(); //Importando o dotenv para usar variáveis de ambiente

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  app.emit('pronto'); //Nesse momento, o evento 'pronto' é emitido
}).catch(e => console.log(e)); //Capturando um possível erro na tela

const routes = require('./routes');
const path = require('path');
const { meuMiddlewareGlobal, meuOutroMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true })); 
app.use(routes); //Meu app vai usar as rotas que estão no arquivo routes.js
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); //Definição de uma view engine, no caso, o EJS, para a renderização de HTML
//Algo semelhante ao Django, que usa o Jinja2

app.use(meuMiddlewareGlobal); //Todas as rotas vão passar por esse middleware
app.use(meuOutroMiddleware); //Todas as rotas vão passar por esse middleware

app.on('pronto', () => {  //Depois que o evento 'pronto' é emitido, o servidor é iniciado
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor rodando na porta 3000');
  });
});

