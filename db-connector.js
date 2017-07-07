var mongojs = require("mongojs");

var db = mongojs("@localhost:27017/uit_attendance_db", ["timetable"]);

module.exports = db;
