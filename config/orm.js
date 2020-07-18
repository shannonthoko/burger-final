const connection = require("./connection.js");

const orm = {


    selectAll: function(tableInput, cb){
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;

            cb(result);
        })


    },

    insertOne: function (name,cb){
        const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ( ' " + name + " ', TRUE); ";
        connection.query(queryString, function(err,result){
            if(err) throw err;
            cb(result);
        })

        

    },

    updateOne: function (condition,cb){
        const queryString = "UPDATE burgers SET devoured = FALSE WHERE " + condition +";";
        
        connection.query(queryString, function(err,result){


            if(err) throw err;
            
            cb(result);
        })
        
    },

    delete:function(condition,cb){

        const queryString = "DELETE FROM burgers WHERE " + condition;
        connection.query(queryString, function(err,result){

            if(err)throw err;
            cb(result);
        })
    }

 

}



module.exports = orm;