const orm = require("../config/orm.js"); 


const burger = {


    all: function(cb){
        orm.selectAll("burgers", function(res){

            cb(res);
        })
},

    update: function(condition, cb){

        orm.updateOne(condition, function(res){

            cb(res);
        })
    },

   insert: function(name,cb) {
       orm.insertOne(name, function(res){

        cb(res);
       })

    },

    delete: function(condition,cb){

        orm.delete(condition,function(res){

            cb(res)
        })
    }

};






module.exports = burger;