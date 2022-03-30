'use strict';


/**
 * Cria cupom
 * Add um cupom no sistema
 *
 * body Cupom Objeto do cupom criado
 * no response value expected for this operation
 **/
exports.addCupom = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletar cupom
 *
 * nome String Nome do cupom a ser excluído
 * no response value expected for this operation
 **/
exports.deleteCupom = function(nome) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obter um cupom pelo seu nome
 *
 * nome String Nome do cupom que precisa ser buscado.
 * returns cupom
 **/
exports.getCupomByName = function(nome) {
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
 * Obter lista de cupons
 *
 * returns cupom
 **/
exports.getCupons = function() {
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
 * Atualiza um cupom
 *
 * nome String Nome que precisa ser atualizado
 * body Cupom Objeto do cupom atualizado
 * no response value expected for this operation
 **/
exports.updateCupom = function(nome,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

