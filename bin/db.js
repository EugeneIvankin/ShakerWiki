var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'node44468-shakerwiki.mycloud.by',
    port: '3306',
    user: 'lost',
    password: '1111',
    database: 'lost'
})

module.exports = client;
