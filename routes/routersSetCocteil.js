var express = require('express');
var db = require('../bin/databaseConnection.js');

function addLike(idCocteil, idUser, callback) {
  db.query('update info_of_cocteils set like_of_cocteil=like_of_cocteil+1 where idCocteil= ?', [idCocteil], function (err, rows) {
    callback(err, rows);
  });
  db.query('insert into userlikecocteil (idUser, idCocteil) value (?, ?)', [idUser, idCocteil]);
};

function addCocteil(name, history, preparation, callback) {
  db.query('insert into info_of_cocteils (name_of_cocteil, history_of_cocteil, like_of_cocteil, cockteils_preparation) ' +
    'values ( ?, ?, 0, ?)', [name, history, preparation], function (err, rows) {
    callback(err, rows);
  });
};

function addCocteilIngredients(nameCocteil, ingredient, volum, callback) {
  db.query('insert into cocteil_ingredients (name_of_cocteil, name_of_ingredient, volum) values (? , ? , ?)', [nameCocteil, ingredient, volum], function (err, rows) {
    callback(err, rows);
  });
};

module.exports = {
  addLike: addLike,
  addCocteil: addCocteil,
  addCocteilIngredients: addCocteilIngredients
};

