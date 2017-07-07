var express = require("express");
var parser = require("body-parser");
var timetableRouter = require("./timetable-router.js");
var app = express();

app.use(parser.urlencoded({extended: true}));

// app.use(express.static("./static"));
app.use("/timetables", timetableRouter);

var server = app.listen(3000, function() {
  console.log("UitAttendance server running on port 3000");
});
