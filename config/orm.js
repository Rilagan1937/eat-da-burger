
var connection = require("../config/connection.js");


var orm = {
    
    selectAll: function(callBack) {
        connection.query("SELECT * FROM burgers", function(err, result){
            if(err) throw err;
            callBack(result);
        }); 
    },

    insertOne: function(newBurger, callBack) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [newBurger], function(err, result) {
            if(err) throw err;
            callBack(result);
        });
    },

    updateOne: function(burgerID, callBack) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [burgerID], function(err, result){
            if(err) throw err;
            callBack(result);
        });
    },

    deleteOne: function(burgerID, callBack) {
        connection.query("DELETE FROM burgers WHERE id = ?", [burgerID], function(err, result){

        });
    }
}

module.exports = orm;