var mysql = require('mysql');

/*var client = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'shakerwiki'
});*/

var client = mysql.createConnection({
  host: 'node47245-swiki.mycloud.by',
  port: '3306',
  user: 'root',
  password: 'NORzlp41114',
  database: 'shakerwiki'
});

module.exports = client;
