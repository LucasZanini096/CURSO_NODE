const express = require('express');
const app = express();

//Instalação de instâncias de desenvolvimento
//npm install nome_biblioteca --save-dev

// http://meusite.com <- GET -> Entregue a página index.html
// http://meusite.com/contato <- GET -> Entregue a página contato.html
// http://meusite.com/sobre <- GET -> Entregue a página sobre.html


//  CROUD -> CREATE, READ, UPDATE, DELETE
//  GET -> READ -> LER ALGO
//  POST -> CREATE -> CRIAR ALGO
//  PUT -> UPDATE -> ATUALIZAR ALGO
//  DELETE -> DELETE -> DELETAR ALGO


// app.get -> GET
//Quando acessar a rota /, execute a função, formada por req e res, sendo "req" o request e "res" o response
//ou seja, quando acessar a rota /, envie a mensagem "Hello World"
app.get('/', (req, res) => {
  res.send('<form action="/" method="POST"><input type="text" name="email"><button type="submit">Enviar</button></form>');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato');
});

app.post('/', (req, res) => {
  res.send('Obrigado por enviar o formulário');
});

// app.listen -> Inicia o servidor na porta 3000
//Exexuta a função de callback, que envia a mensagem "Servidor rodando na porta 3000"
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando na porta 3000');
});