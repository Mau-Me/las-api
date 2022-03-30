'use strict';

var utils = require('../utils/writer.js');
var Produto = require('../service/ProdutoService');

module.exports.addProduto = function addProduto (req, res, next) {
  var body = req.swagger.params['body'].value;
  Produto.addProduto(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProduto = function deleteProduto (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Produto.deleteProduto(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProdutoByName = function getProdutoByName (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Produto.getProdutoByName(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProdutos = function getProdutos (req, res, next) {
  Produto.getProdutos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProduto = function updateProduto (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  var body = req.swagger.params['body'].value;
  Produto.updateProduto(nome,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
