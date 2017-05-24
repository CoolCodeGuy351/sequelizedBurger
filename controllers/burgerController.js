var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {

        res.render("index", { burger_table: data });
    });
});

router.post("/", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {

        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
  burger.updateOne(req.params.id, function() {

        res.redirect("/");

    });
});

// Export routes for server.js to use.
module.exports = router;
