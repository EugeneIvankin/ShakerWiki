var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'node44468-shakerwiki.mycloud.by',
    user: 'lost',
    password: '1111',
    database: 'model'
})

module.exports = client;
