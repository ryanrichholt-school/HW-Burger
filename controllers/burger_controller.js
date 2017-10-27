var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

// Front page
router.get("/", function(req, res) {
  // What to do after the database query is done
  var cb = function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log('Router received data from ORM:'); 
    console.log(hbsObject);
    res.render("index", hbsObject);
  }

  // Run the query
  burger.all(cb);
});

// Create a new burgers
router.post("/api/burgers", function(req, res) {
  // Generate the properties from the request body
  var burgerName = req.body.burgerName;
  
  // What to do after the burger is created
  var cb = function(result){
    res.json({ id: result.insertId })
  }

  // Use the model to create a new database entry
  burger.create(burgerName, cb);
});

// Update a burger
router.put("/api/burgers/:id", function(req, res) {
  // Burger id comes from the route props from body
  var id = req.params.id;
  var props = req.body;  
  
  // What to do after the update is finished
  var cb = function(result){
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }

  // Use model to perform an update
  burger.update(id, props, cb);
});

module.exports = router;	
