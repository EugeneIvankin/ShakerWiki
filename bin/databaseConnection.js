var mysql = require('mysql');

/*var client = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'shakerwiki'
});*/

var client = mysql.createConnection({
  host: 'node47277-swiki.mycloud.by',
  port: '3306',
  user: 'root',
  password: 'OVOxoa69018',
  database: 'shakerwiki'
});

module.exports = client;
