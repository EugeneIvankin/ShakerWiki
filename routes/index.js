var express = require('express');
var router = express.Router();
var cocteil = require('../bin/cocteil');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/1', function (req, res) {
function show(callback) {
    var names, historyOf;
        cocteil.getName(function (name) {
            names = name;
        });
        cocteil.getComposition(function (history) {
            historyOf=history;
            callback(names, historyOf);
        });

};

show(function (name, history) {
    console.log(name);
    console.log(history);
    res.render('index', { nameOfCocteil: name, historyOfCocteil: history });
});








   /*let nameOfCocteil, historyOfCocteil;
    nameOfCocteil = "Name";
    historyOfCocteil = "history";*/



   /** cocteil.getComposition(function (composition) {
        res.render('index', { historyOfCocteil: composition });
    })*/

  // res.render('index', { historyOfCocteil: historyOfCocteil });
});

module.exports = router;
