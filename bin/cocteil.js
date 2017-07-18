var db = require('../bin/db.js');

/**
 * Prototype for cocteils
 */

var cocteil = new Cocteil();



function Cocteil () {

    this.setName = function (name) {
        this.name = name;
    }

    this.getName = function coc (callback) {
        let name;
        db.query('SELECT name from name_of_cockteils where idname_of_cockteils = 1', function (err, rows) {
            if (!err) {
                name = rows[0].name;
                callback(name);
            }
            else
                console.log('bad');
        })
    }

    this.setComposition = function (composition) {
        this.composition = composition;
    }

    this.getComposition = function () {
        console.log(cocteil.composition);
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
