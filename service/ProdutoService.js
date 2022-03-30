'use strict';


/**
 * Cria prodduto
 * Add um produto no sistema
 *
 * body Produto Objeto do produto criado
 * no response value expected for this operation
 **/
exports.addProduto = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletar produto
 *
 * nome String Nome do produto a ser excluído
 * no response value expected for this operation
 **/
exports.deleteProduto = function(nome) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obter um produto pelo seu nome
 *
 * nome String Nome do produto que precisa ser buscado.
 * returns produto
 **/
exports.getProdutoByName = function(nome) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter lista de produtos
 *
 * returns produto
 **/
exports.getProdutos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza um produto
 *
 * nome String Nome que precisa ser atualizado
 * body Produto Objeto do produto atualizado
 * no response value expected for this operation
 **/
exports.updateProduto = function(nome,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

