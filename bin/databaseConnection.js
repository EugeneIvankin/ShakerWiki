var mysql = require('mysql');

/*var client = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'shakerwiki'
});*/

var client = mysql.createConnection({
  host: ' node47236-shakerwiki.mycloud.by',
  port: '3306',
  user: 'root',
  password: 'NOYqcf27815',
  database: 'shakerwiki'
});

module.exports = client;
