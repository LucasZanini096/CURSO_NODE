exports.meuMiddlewareGlobal = (req, res, next) => {
  console.log();
  console.log('Passei no seu middleware.');
  console.log();
  next();  //Next é uma função que chama o próximo middleware ou rota, ou seja, se não tiver o next, a aplicação vai parar nesse middleware.
}

exports.meuOutroMiddleware = (req, res, next) => {
  console.log();
  console.log('Passei no seu outro middleware.');
  console.log();
  next();  //Next é uma função que chama o próximo middleware ou rota, ou seja, se não tiver o next, a aplicação vai parar nesse middleware.
}