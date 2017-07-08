var student = require("./models/student.js");
var cl = require("./models/class.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.status(200).json(["First", "Second", "Third", "Fourth", "Fifth"]);
});

router.get("/:year", function(req, res) {
  var year = req.params.year;
  cl.find({ year: year}, function(err, result) {
    if(result) res.status(200).json(result);
    else res.status(404).json({ msg: "Not Found!" });
  });
});

router.get("/:year/:class", function(req, res) {
  var year = req.params.year;
  var cl = req.params.class;
  student.find({ year: year, class: cl }, function(err, result) {
    if(result) res.status(200).json(result);
    else res.status(404).json({ msg: "Not Found!"});
  });
});

module.exports = router;
