var express = require("express");


var burger = require("../models/burger.js")


var router = express.Router();


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handleBarsObj = { burgers: data }
        res.render("index", handleBarsObj);
    });
});


router.post("/api/burgers", function (req, res) {

    burger.insertOne(req.body.burgerName, function () {
        res.redirect("/");
    });
});


router.put("/api/burgers/update", function (req, res) {
 
    burger.updateOne(req.body.burger_id, function () {
        res.redirect("/");
    });
});


router.delete("/api/burgers/:id", function (req, res) {
    
    burger.updateOne(req.params.id, function () {
        res.redirect("/");
    });
});

module.exports = router;


