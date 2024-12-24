exports.paginaInicial = (req, res) => {
  res.send('<form action="/" method="POST"><input type="text" name="nome"><button type="submit">Enviar</button></form>');
}

exports.trataPost = (req, res) => {
  res.send(`O que você me enviou foi: ${req.body.nome}`);
}