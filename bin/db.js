var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'model'
})

module.exports = client;
