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
  add(function (err,rows) {
    answerFromServer.answer(req,res,err,rows);
  });

  function add(callback) {
    var nameCocteil;
    var ingredient;
    var volum;
    var rowsA;
    var errA;
    for (var i=0; i<req.body.ingredients.length; i++){
      nameCocteil = req.body.name;
      ingredient = req.body.ingredients[i].name;
      volum = req.body.ingredients[i].volum;
      routersSetCocteil.addCocteilIngredients(nameCocteil, ingredient, volum, function () {
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
