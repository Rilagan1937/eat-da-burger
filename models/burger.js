
var orm = require("../config/orm.js")



var burger = {
    
    selectAll: function(callBack){
        orm.selectAll(function(res){
            callBack(res);
        });
    },

    
    insertOne: function(newBurg, callBack){
        orm.insertOne(newBurg, function(res){
            callBack(res);
        });
    },

    updateOne: function(eatenBurg, callBack){
        orm.updateOne(eatenBurg, function(res){
            callBack(res);
        });
    },

    deleteOne: function(deletedBurg, callBack){
        orm.deleteOne(deletedBurg, function(res){
            callBack(res);
        });
    }
}

module.exports = burger;