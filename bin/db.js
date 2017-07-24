var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'node44468-shakerwiki.mycloud.by',
    port: '3306',
    user: 'root',
    password: 'EGFgym01464',
    database: 'ShakerWiki'
})

/*var client = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'shakerwiki'
})*/

module.exports = client;
