var express = require('express');
var router = express.Router();
var db = require('../bin/databaseConnection.js');
var bodyParser = require("body-parser");


/*router.get('/', function(req, res, next) {
  db.query('SELECT name_of_cocteil, history_of_cocteil, like_of_cocteil, cockteils_preparation ' +
    'FROM info_of_cocteils where name_of_cocteil= "Американо"', function (err, rows) {
    if (err){
      res.send(err);
    }
    res.json(rows);
  });
});*/


var jsonParser = bodyParser.json();

router.post('/',jsonParser, function(req, res, next) {
  var name = req.body.name;
  db.query('SELECT name_of_cocteil, history_of_cocteil, like_of_cocteil, cockteils_preparation ' +
    'FROM info_of_cocteils where name_of_cocteil= ? ', [name], function (err, rows) {
    if (err){
      res.json("Коктейл не найден");
    }
    res.json(rows[0]);
  });

});

router.post('/ingredients', jsonParser, function(req, res, next) {
  var name = req.body.name;
  db.query('SELECT ingredient, volum  ' +
    ' from cocteil_ingredients, ingredients  ' +
    'where cocteil_ingredients.idIngredients=ingredients.idIngredients ' +
    'and cocteil_ingredients.name_of_cocteil= ? ', [name], function (err, rows) {
    if (err){
      res.json("Коктейл не найден");
    }
    res.json(rows);
  });
});

router.get('/all', function(req, res, next) {
  db.query('SELECT name_of_cocteil from info_of_cocteils', function (err, rows) {
    if (err) {
      res.send(err);
    }
    res.json(rows);
  });
});

router.get('/popCocteil', function (req, res, next) {
  db.query('SELECT name_of_cocteil from info_of_cocteils where like_of_cocteil= ' +
    '(select max(like_of_cocteil) from info_of_cocteils)', function (err, rows) {
    if (err) {
      res.send(err);
    }
    res.json(rows[0]);
  });
});

router.put('/addLike', jsonParser, function (req, res, next) {
  var name = req.body.name;
  db.query('update info_of_cocteils set like_of_cocteil=like_of_cocteil+1 where name_of_cocteil= ? ', [name], function (err, rows) {
    if (err) {
      res.send(err);
    }
    res.json(rows);
  });
});

module.exports = router;
