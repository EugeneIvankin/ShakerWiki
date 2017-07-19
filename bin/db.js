var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'node44468-shakerwiki.mycloud.by ',
    user: 'root',
    password: 'EGFgym01464',
    database: 'model'
})

module.exports = client;
