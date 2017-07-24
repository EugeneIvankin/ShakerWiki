var db = require('../bin/db.js');

/**
 * Prototype for cocteils
 */

var cocteil = new Cocteil();



function Cocteil () {

    this.setName = function (name) {
        this.name = name;
    }

    this.getName = function (callback) {
        var name;
        db.query('SELECT name_of_cocteil FROM info_of_cocteils where idCocteil = 1', function (err, rows) {
            if (!err) {
                name = rows[0].name_of_cocteil;
            }
            else{
                name = err;
            }
            callback(name);
        })
    }

    this.setHistory = function (composition) {
        this.composition = composition;
    }

    this.getHistory = function com (callback) {
        var History;
        db.query('SELECT history_of_cocteil FROM info_of_cocteils where idCocteil = 1', function (err, rows) {
            if (!err) {
                history = rows[0].history_of_cocteil;
            }
            else{
                history = err;
            }
            callback(history);
        })

    }

    this.setCookingMethod = function (cookingMethod) {
        this.cookingMethod = cookingMethod;
    }

    this.getCookingMethod = function () {
        console.log(cocteil.cookingMethod);
    }

    this.setLike = function (like) {
        this.like = like;
    }

    this.getLike = function () {
        console.log(cocteil.like);
    }

    this.setComment = function (comment) {
        this.comment = comment;
    }

    this.getComment = function () {
        console.log(cocteil.comment);
    }

    this.all = function (callback) {
        var names, historyOf;
        cocteil.getName(function (name) {
            names = name;
        });
        cocteil.getComposition(function (history) {
            historyOf=history;
            callback(names, historyOf);
        });
    }

    this.allInfo = function (callback) {
        var name, history, likes, preparation;
        db.query('SELECT name_of_cocteil, history_of_cocteil, like_of_cocteil, cockteils_preparation FROM info_of_cocteils where idCocteil = 1', function (err, rows) {
            if (!err) {
                name = rows[0].name_of_cocteil;
                history = rows[0].history_of_cocteil;
                likes = rows[0].like_of_cocteil;
                preparation = rows[0].cockteils_preparation;
            }
            else{
                name = err;
                history = err;
                likes = err;
                preparation = err;
            }
            callback(name,history,likes,preparation);
        })
    }

}



module.exports = cocteil;
