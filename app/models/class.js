var mongojs = require("mongojs");
var database = require("../../config/database.js");
var db = mongojs(database.url, ["class"]);

module.exports = db.class;
