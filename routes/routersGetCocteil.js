var express = require('express');
var db = require('../bin/databaseConnection.js');

function getCocteilInfo(id, callback) {
  db.query('SELECT * FROM info_of_cocteils where idCocteil= ? ', [id], function (err, rows) {
    callback(err, rows);
  });
};

function getCocteilIngreedietn(id, callback) {
  db.query('select volum, ingredient from cocteil_ingredients, ingredients where ' +
    'idIngredient = ingredients.idIngredients and idCocteil = ?', [id], function (err, rows) {
    callback(err, rows);
  });
};

function getCocteilId(name, callback) {
  db.query('SELECT idCocteil FROM info_of_cocteils where name_of_cocteil = ?', [name], function (err, rows) {
    callback(err, rows);
  });
};

function getAllCocteils(callback) {
  db.query('SELECT name_of_cocteil from info_of_cocteils', function (err, rows) {
    callback(err, rows);
  });
};

function getPopCocteil(callback) {
  db.query('SELECT idCocteil from info_of_cocteils where like_of_cocteil = ' +
    '(select max(like_of_cocteil) from info_of_cocteils)', function (err, rows) {
    callback(err, rows);
  });
};

module.exports = {
  getCocteilInfo: getCocteilInfo,
  getCocteilIngreedietn: getCocteilIngreedietn,
  getCocteilId: getCocteilId,
  getAllCocteils: getAllCocteils,
  getPopCocteil: getPopCocteil
};
