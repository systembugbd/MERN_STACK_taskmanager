const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name value is required"],
    trim: true,
    maxlength: [50, "Name maxlength not gether then 50 Char"],
    minlength: [5, "Name minleangth not less then 5 Char"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("task", taskSchema);
