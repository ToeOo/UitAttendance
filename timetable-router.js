var express = require("express");
var router = express.Router();

var db = require("./db-connector.js");

router.get("/", function(req, res) {
  db.timetable.find(function(err, timetables) {
    res.status(200).json(timetables);
  });
});

router.get("/:cl", function(req, res) {
  var cl = req.params.cl;
  db.timetable.find({class: cl}, function(err, timetable) {
    if(timetable) res.status(200).json(timetable);
    else res.status(404).json({msg: "Not Found"});
  });
});

module.exports = router;
