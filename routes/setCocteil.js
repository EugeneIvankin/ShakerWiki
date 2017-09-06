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

  addIngredients(function (ans) {
    if (ans){
      console.log("Начал добавлять обьем");
      addIngredientsVolum(function (err, rows) {
        answerFromServer.answer(req,res,err,rows);
      })
    }
  });

  function addIngredients(callback) {
    var ans;
    console.log("Добавляю ингридиенты");

    for (var i=0; i<req.body.ingredients.length; i++){
      ingredient = req.body.ingredients[i].name;
      routersSetCocteil.checkIngredient(ingredient, function (rows) {
        if (rows !== null){
          routersSetCocteil.addCocteilIngredients(ingredient);
        }
      })
    }
    ans = true;
    callback(ans);
  }

  function addIngredientsVolum(callback) {
    console.log("Добавляю обьем");
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
