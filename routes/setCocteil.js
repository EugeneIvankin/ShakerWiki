var express = require('express');
var router = express.Router();
var routersSetCocteil = require('./routersSetCocteil');
var answerFromServer = require('./answerFromServer');

router.put('/addLike', function (req, res) {
  routersSetCocteil.addLike(req.body.idCocteil, req.body.idUser, function (err, rows) {
    answerFromServer.answer(req,res,err,rows);
  })
});

router.put('/addCocteil', function (req, res) {
   routersSetCocteil.addCocteil(req.body.name, req.body.history, req.body.preparation, function (err, rows) {
     answerFromServer.answer(req,res,err,rows);
  })
});

router.put('/addCocteilIngredients', function (req, res) {
  var nameCocteil;
  var ingredient;
  var volum;

  addIngredients(function (err, rows) {
    addIngredientsVolum(function (err, rows) {
      answerFromServer.answer(req,res,err,rows);
    })
  });

  function addIngredients(callback) {
    for (var i=0; i<req.body.ingredients.length; i++){
      var rowsA;
      var errA;
      ingredient = req.body.ingredients[i].name;
      routersSetCocteil.addCocteilIngredients(ingredient, function (err, rows) {
        if (err) {
          errA = err;
        }
        rowsA = rows;
      })
    }
    callback(errA, rowsA);
  }

  function addIngredientsVolum(callback) {
    var rowsA;
    var errA;
    for (var i=0; i<req.body.ingredients.length; i++){
      nameCocteil = req.body.name;
      ingredient = req.body.ingredients[i].name;
      volum = req.body.ingredients[i].volum;
      routersSetCocteil.addIngredientsVolum(nameCocteil, ingredient, volum, function (err, rows) {
        if (err) {
          errA = true;
        }
        rowsA = true;
        callback(errA, rowsA);
      })
    }
  }
});

module.exports = router;
