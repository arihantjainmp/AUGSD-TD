var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var settingsSchema = new Schema({
  name: String,
  description: String,
  type: String,
  value: [String],
  options: String
});

var model = mongoose.model("settings", settingsSchema);

module.exports = model;
