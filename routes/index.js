var express = require('express');
var router = express.Router();
//var cocteil = require('../bin/cocteil');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/1', function (req, res) {
   /* cocteil.getName(function (name) {
        res.send(name);
    })*/
});

module.exports = router;
