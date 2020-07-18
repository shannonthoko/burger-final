const express = require("express");
const burger = require("../models/burger.js");

//router
const router = express.Router();

router.get("/", function(req,res){

    burger.all(function(data){

        let burgersAll = {

            burgers:data
        };
        //console.log(burgersAll)
        res.render("index", burgersAll)
    })


})





router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(condition

        //devoured: req.body.devoured
        ,function(data){

        //console.log(data);

        console.log("updatedBurger");
    });
   

});

router.post("/api/burgers", function(req,res){

    burger.insert([req.body.name], function(result){

        res.json({id: result.insertID})
    })
})

router.delete("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;

    burger.delete(condition,function(data){

        console.log("deleted burger");
    })

})

module.exports = router;