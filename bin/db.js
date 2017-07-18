var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'node44460-shekerwiki.mycloud.by ',
    user: 'root',
    password: 'MXVcla41136',
    database: 'model'
})

module.exports = client;
