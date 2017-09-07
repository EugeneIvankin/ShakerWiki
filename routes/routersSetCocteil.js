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

function addIngredient(ingredient) {
  db.query('insert ignore into ingredients set `ingredient` = ?', [ingredient]);
};

function addIngredientsVolum(nameCocteil, ingredient, volum) {
  console.log("добавил обьем");
  db.query('insert into cocteil_ingredients (idCocteil, idIngredient, volum) values ' +
    '((select idCocteil from info_of_cocteils where name_of_cocteil= ?), ' +
    '(select idIngredients from ingredients where ingredient= ?), ?)', [nameCocteil, ingredient, volum]);
};

module.exports = {
  addLike: addLike,
  addCocteil: addCocteil,
  addIngredientsVolum: addIngredientsVolum,
  addIngredient: addIngredient
};

