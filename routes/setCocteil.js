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
  console.log(req.body.name);
  console.log(req.body.history);
  console.log(req.body.preparation);
  console.log(req.body.ingredients);
   routersSetCocteil.addCocteil(req.body.name, req.body.history, req.body.preparation, function (err, rows) {
     answerFromServer.answer(req,res,err,rows);
  })
});

router.put('/addCocteilIngredients', function (req, res) {
  var nameCocteil;
  var ingredient;
  var volum;

  addIngredients(function (err,rows) {
      answerFromServer.answer(req,res,err,rows);
  });

  //добавить просто ингридиенты

  function addIngredients(callback) {
    var rowsA;
    var errA;
    for (var i=0; i<req.body.ingredients.length; i++){
      nameCocteil = req.body.name;
      console.log(nameCocteil);
      ingredient = req.body.ingredients[i].name;
      volum = req.body.ingredients[i].volum;
      routersSetCocteil.addCocteilIngredients(nameCocteil, ingredient, volum, function (err, rows) {
        if (err) {
          errA = err;
        }
        rowsA = rows;
      })
    }
    callback(errA, rowsA);
  }

});

module.exports = router;
