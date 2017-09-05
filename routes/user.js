var express = require('express');
var router = express.Router();
var userRouters = require('./userRouters');
var answerFromServer = require('./answerFromServer');

router.post('/searchUser', function (req,res) {
  userRouters.getUser(req.body.name, req.body.password, function (err, rows) {
    answerFromServer.answer(req,res,err,rows);
  })
});

router.put('/addUser', function (req, res) {
  userRouters.setUser(req.body.name, req.body.password, function (err, rows) {
    answerFromServer.answer(req,res,err,rows);
  })
});

router.post('/searchUsersCocteil', function(req, res) {
  var usersCocteil = [];
  userRouters.getUserCocteils(req.body.idUser, function (err, rows) {
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
  })
});

module.exports = router;
