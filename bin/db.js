var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'node44465-shekerwiki.mycloud.by',
    user: 'root',
    password: 'ZAFmvm31446',
    database: 'model'
})

module.exports = client;
