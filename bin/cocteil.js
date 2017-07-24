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
       /* db.query('SELECT username FROM User where idUser = 1', function (err, rows) {
            if (!err) {
                name = rows[0].username;
                callback(name);
            }
            else
                name = err;
            callback(name);
        })*/

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

    this.setComposition = function (composition) {
        this.composition = composition;
    }

    this.getComposition = function com (callback) {
        var composition;

        db.query('SELECT history_of_cocteil FROM info_of_cocteils where idCocteil = 1', function (err, rows) {
            if (!err) {
                composition = rows[0].history_of_cocteil;
            }
            else{
                composition = err;
            }
            callback(composition);
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

}



module.exports = cocteil;
