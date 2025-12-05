const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  priority: { type: String, default: "Medium" },
  progress: { type: Number, default: 0 }
});

module.exports = mongoose.model("Task", taskSchema);
