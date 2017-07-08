var period = require("./models/period.js");
var express = require("express");
var router = express.Router();

router.get("/:class", function(req, res) {
  var cl = req.params.class;
  period.find({ class: cl }, function(err, result) {
    if(result) res.status(200).json(result);
    else res.status(404).json({ msg: "Not Found!" });
  });
});

router.get("/:class/:day", function(req, res) {
  var cl = req.params.class;
  var day = req.params.day;
  period.find({ class: cl, day: day }, function(err, result) {
    if(result) res.status(200).json(result);
    else res.status(404).json({ msg: "Not Found!" });
  });
});

module.exports = router;
