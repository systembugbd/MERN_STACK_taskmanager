const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isCompleted: Boolean,
});

module.exports = mongoose.model("task", taskSchema);
