var express = require('express');
var router = express.Router();
var cocteil = require('../bin/cocteil');

/* GET home page. */
router.get('/', function(req, res, next) {
    cocteil.allInfo(function (name, history,like,preparation) {
        res.render('index', { nameOfCocteil: name, historyOfCocteil: history, likeOfCocteil: like,cocteilPreparation:preparation });
    });
});


module.exports = router;
