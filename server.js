var express = require("express");
var parser = require("body-parser");
var periodRouter = require("./app/period-routes.js");

var app = express();

app.use(parser.urlencoded({ extended: true }));
app.use("/timetables", periodRouter);

var server = app.listen(3000, function() {
  console.log("UitAttendance server running on port 3000!");
});
