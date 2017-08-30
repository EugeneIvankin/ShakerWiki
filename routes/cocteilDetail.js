var express = require('express');
var router = express.Router();
var db = require('../bin/databaseConnection.js');
var bodyParser = require("body-parser");

//вынести запросы в одтельные методы
//разбить по файлам
//убрать копи-паст
//jsonParser

var jsonParser = bodyParser.json();

router.post('/',jsonParser, function(req, res, next) {
  var name = req.body.name;
  db.query('SELECT name_of_cocteil, history_of_cocteil, like_of_cocteil, cockteils_preparation ' +
    'FROM info_of_cocteils where name_of_cocteil= ? ', [name], function (err, rows) {
    if (err){
      res.json(err);
    }
    res.json(rows[0]);
  });

});

router.post('/ingredients', jsonParser, function(req, res, next) {
  var name = req.body.name;
  db.query('SELECT name_of_ingredient, volum FROM cocteil_ingredients where name_of_cocteil= ? ', [name], function (err, rows) {
    if (err){
      res.json(err);
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
  var idUser = req.body.idUser;
  db.query('update info_of_cocteils set like_of_cocteil=like_of_cocteil+1 where name_of_cocteil= ?', [name], function (err, rows) {
    if (err) {
      res.send(err);
    }
    res.json(rows);
  });
  db.query('insert into userlikecocteil (idUser, name_of_cocteil) value (?, ?)', [idUser, name]);
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

router.put('/addCocteilIngredients', jsonParser, function (req, res, next) {

  add(function (err,rows) {
    console.log(rows);
    if (err) {
      res.send(err);
    }
    res.json(rows);
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
      db.query('insert into cocteil_ingredients (name_of_cocteil, name_of_ingredient, volum) values (? , ? , ?)', [nameCocteil, ingredient, volum], function (err, rows) {
        if (err) {
          errA = err;
        }
        rowsA = rows;
      });
    }
    console.log(errA, rowsA);
    callback(errA, rowsA);
  }
});

router.post('/searchUser', jsonParser, function (req,res,next) {
  var name = req.body.name;
  var password = req.body.password;
  db.query('SELECT idUser FROM user where userName=? and userPassword=?', [name, password], function (err, rows) {
    if (err) {
      res.send(err);
    }
    res.json(rows);
  });
});

router.put('/addUser', jsonParser, function (req, res, next) {
  var name = req.body.name;
  var password = req.body.password;
  db.query('insert into user (userName, userPassword) values (?, ?);', [name, password], function (err, rows) {
    if (err) {
      res.send(err);
    }
    res.json(rows);
  });
});

router.post('/searchUsersCocteil', jsonParser, function(req, res) {
  var idUser = req.body.idUser;
  var usersCocteil = [];
  db.query('SELECT name_of_cocteil FROM userlikecocteil where idUser= ? ', [idUser], function (err, rows) {
    if (err){
      res.json(err);
    }
    else {
      if (rows.length !== 0){
        for (var i=0; i<rows.length; i++){
          usersCocteil[i] = rows[i].name_of_cocteil;
        }
        res.json(usersCocteil);
      }
      else {
        res.json(usersCocteil);
      }
    }
  });
});



module.exports = router;
