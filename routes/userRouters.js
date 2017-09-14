var express = require('express');
var db = require('../bin/databaseConnection.js');

function getUser(name, password, callback) {
  db.query('SELECT idUser FROM user where userName=? and userPassword=?', [name, password], function (err, rows) {
    callback(err, rows);
  });
};

function setUser(name, password, callback) {
  db.query('insert into user (userName, userPassword) values (?, ?)', [name, password], function (err, rows) {
    callback(err, rows);
  });
};

function getUserCocteils(idUser, callback) {
  db.query('SELECT name_of_cocteil FROM info_of_cocteils where idCocteil = ' +
    '(select idCocteil from userLikeCocteil where idUser = ?)', [idUser], function (err, rows) {
    callback(err, rows);
  });
};

module.exports = {
  getUser: getUser,
  setUser: setUser,
  getUserCocteils: getUserCocteils
};
