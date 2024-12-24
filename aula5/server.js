const express = require('express');
const app = express();

//Se não tiver tratado o body, o express não consegue entender o que está sendo enviado pelo formulário
app.use(express.urlencoded({ extended: true })); //Middleware para decodificar os dados enviados pelo formulário

// app.get -> GET
//Quando acessar a rota /, execute a função, formada por req e res, sendo "req" o request e "res" o response
//ou seja, quando acessar a rota /, envie a mensagem "Hello World"
app.get('/', (req, res) => {
  res.send('<form action="/" method="POST"><input type="text" name="nome"><button type="submit">Enviar</button></form>');
});


app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  //? -> parâmetro opcional
  console.log(req.params); //req.params -> acessa os parâmetros da URL
  //Retorna com o objeto { idUsuarios: '145' }
  console.log(req.query); //req.query -> acessa os parâmetros da URL, como query strings
  res.send(req.params);
})

// app.listen -> Inicia o servidor na porta 3000
//Exexuta a função de callback, que envia a mensagem "Servidor rodando na porta 3000"
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando na porta 3000');
});