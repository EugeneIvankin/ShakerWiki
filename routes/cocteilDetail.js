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

router.put('/addCocteil', jsonParser, function (req, res, next) {
  var name = req.body.name;
  var history = req.body.history;
  var preparation = req.body.preparation;
  db.query('insert into info_of_cocteils (name_of_cocteil, history_of_cocteil, like_of_cocteil, cockteils_preparation) values ( ?, ?, 0, ?)', [name, history, preparation], function (err, rows) {
    if (err) {
      res.send(err);
    }
    res.json(rows);
  });
});

router.post('/addCocteilIngredients', jsonParser, function (req, res, next) {

  for (var i=0; i<req.body.ingredients.length; i++){
    var ingredient = req.body.ingredients[i].name;
    console.log(ingredient);
    /*db.query('SELECT ingredient FROM ingredients WHERE ingredient = ?', [ingredient], function (err, rows) {
      if (err) {
        res.send(err);
      }
      if (rows[0]===undefined){
        console.log("not have");*/
        db.query('insert into ingredients (ingredient) values ( ? )', [ingredient], function (err, rows) {
          if (err) {
            console.log(ingredient + "not add");
          }
          console.log(ingredient + "add");
        });
     /* }
      else (console.log("have" + rows[0].ingredient));
    });*/
  }



  /*db.query('insert into info_of_cocteils (name_of_cocteil, history_of_cocteil, like_of_cocteil, cockteils_preparation) values ( ?, ?, 0, ?)', [name, history, preparation], function (err, rows) {
    if (err) {
      res.send(err);
    }
    res.json(rows);
  });*/
});





module.exports = router;
