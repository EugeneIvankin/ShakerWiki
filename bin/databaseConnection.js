var mysql = require('mysql');

/*var client = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'shakerwiki'
});*/

var client = mysql.createConnection({
  host: 'node47242-env-9312042.mycloud.by',
  port: '3306',
  user: 'root',
  password: 'IDGaql83920',
  database: 'shakerwiki'
});

module.exports = client;
