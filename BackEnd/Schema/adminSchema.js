const { default: mongoose } = require("mongoose");

const adminSchema = new mongoose.Schema({
  title: { type: String, required: true },
  total_tests: { type: String, required: true },
  free_tests: { type: String, required: true },
  languages: { type: [String], required: true },
  details: { type: [String], required: true },
  users: { type: Number, required: true },
});

const adminModel = mongoose.model("admin", adminSchema);
module.exports = adminModel;
