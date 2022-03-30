'use strict';

var utils = require('../utils/writer.js');
var Categoria = require('../service/CategoriaService');

module.exports.addCategoria = function addCategoria (req, res, next) {
  var body = req.swagger.params['body'].value;
  Categoria.addCategoria(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCategoria = function deleteCategoria (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Categoria.deleteCategoria(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategoriaByName = function getCategoriaByName (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Categoria.getCategoriaByName(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategorias = function getCategorias (req, res, next) {
  Categoria.getCategorias()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCategoria = function updateCategoria (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  var body = req.swagger.params['body'].value;
  Categoria.updateCategoria(nome,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
