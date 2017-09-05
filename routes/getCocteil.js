var express = require('express');
var router = express.Router();
var routersGetCocteil = require('./routersGetCocteil');
var answerFromServer = require('./answerFromServer');

router.post('/cocteil', function(req, res) {
  routersGetCocteil.getCocteilInfo(req.body.id, function (err, rows) {
    answerFromServer.answer(req,res,err,rows);
  });
});

router.post('/ingredients', function(req, res) {
  routersGetCocteil.getCocteilIngreedietn(req.body.id, function (err,rows) {
    answerFromServer.answer(req,res,err,rows);
  });
});

router.post('/idCocteil', function(req, res) {
  routersGetCocteil.getCocteilId(req.body.name, function (err, rows) {
    answerFromServer.answer(req,res,err,rows);
  })
});

router.get('/all', function(req, res) {
  routersGetCocteil.getAllCocteils(function (err,rows) {
    answerFromServer.answer(req,res,err,rows);
  })
});

router.get('/popCocteil', function (req, res) {
  routersGetCocteil.getPopCocteil(function (err, rows) {
    answerFromServer.answer(req,res,err,rows);
  })
});

module.exports = router;
