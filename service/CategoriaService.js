'use strict';


/**
 * Cria categoria
 * Add uma categoria no sistema
 *
 * body Categoria Objeto da categoria criado
 * no response value expected for this operation
 **/
exports.addCategoria = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletar categoria
 *
 * nome String Nome da categoria a ser excluída
 * no response value expected for this operation
 **/
exports.deleteCategoria = function(nome) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obter uma categoria pelo seu nome
 *
 * nome String Nome da categoria que precisa ser buscada.
 * returns categoria
 **/
exports.getCategoriaByName = function(nome) {
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
 * Obter lista de categorias
 *
 * returns categoria
 **/
exports.getCategorias = function() {
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
 * Atualiza uma categoria
 *
 * nome String Nome que precisa ser atualizado
 * body Categoria Objeto da categoria atualizado
 * no response value expected for this operation
 **/
exports.updateCategoria = function(nome,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

