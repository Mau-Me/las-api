'use strict';

var utils = require('../utils/writer.js');
var Cupom = require('../service/CupomService');

module.exports.addCupom = function addCupom (req, res, next) {
  var body = req.swagger.params['body'].value;
  Cupom.addCupom(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCupom = function deleteCupom (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Cupom.deleteCupom(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCupomByName = function getCupomByName (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Cupom.getCupomByName(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCupons = function getCupons (req, res, next) {
  Cupom.getCupons()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCupom = function updateCupom (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  var body = req.swagger.params['body'].value;
  Cupom.updateCupom(nome,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
