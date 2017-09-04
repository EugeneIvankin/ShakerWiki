var express = require('express');
var router = express.Router();
var db = require('../bin/databaseConnection.js');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();


function getCocteilInfo(id) {
  db.query('SELECT * FROM info_of_cocteils where idCocteil= ? ', [id], function (err, rows) {
    return rows;
  });
};

module.exports = {
  getcocteilInfo: getCocteilInfo
};
