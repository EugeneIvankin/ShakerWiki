var db = require('../bin/db.js');

/**
 * Prototype for cocteils
 */

var cocteil = new Cocteil();



function Cocteil () {

    this.allInfo = function (callback) {
        var name, history, likes, preparation;
        var ingredients = [];
        var volumOfIngridients = [];
        cocteil.properties(function (nameOfCocteil, historyOfCocteil, likesOfCocteil, preparationOfCocteil) {
            name = nameOfCocteil;
            history = historyOfCocteil;
            likes = likesOfCocteil;
            preparation = preparationOfCocteil;
        });
        cocteil.ingredients(function (ingredientsOfCocteil, volum) {
            ingredients = ingredientsOfCocteil;
            volumOfIngridients = volum;
            callback(name, history, likes, preparation, ingredients, volumOfIngridients);
        });
    }

    this.properties = function (callback) {
        var name, history, likes, preparation;
        db.query('SELECT name_of_cocteil, history_of_cocteil, like_of_cocteil, cockteils_preparation ' +
                'FROM info_of_cocteils where idCocteil = 1', function (err, rows) {
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

    this.ingredients = function (callback) {
        var ingredients = [];
        var volumOfIngredients = [];
        db.query('SELECT ingredient, volum  ' +
                ' from cocteil_ingredients, ingredients  ' +
                'where cocteil_ingredients.idIngredients=ingredients.idIngredients ' +
                'and cocteil_ingredients.idCocteil=1',function (err,rows) {
            if(!err){
                for (var i=0; i<rows.length; i++){
                    ingredients.push(rows[i].ingredient);
                }
                for (var j=0; j<rows.length; j++){
                    if (rows[j].volum != null){
                        volumOfIngredients.push(rows[j].volum);
                    }
                }
            }
            else{
                ingredients = err;
            }
            callback(ingredients,volumOfIngredients);
        })
    }

}

module.exports = cocteil;
