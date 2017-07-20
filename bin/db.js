var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'node44468-shakerwiki.mycloud.by',
    port: '3306',
    user: 'root',
    password: 'EGFgym01464',
    database: 'model'
})

module.exports = client;
