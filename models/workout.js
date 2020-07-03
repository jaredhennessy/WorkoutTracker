var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter the type of workout."
  },
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the workout."
  },
  duration: {
    type: Number,
    required: "Enter the duration."
  },
  weight: {
    type: Number,
    required: "Enter the weight."
  },
  reps: {
    type: Number,
    required: "Enter the reps."
  },
  sets: {
    type: Number,
    required: "Enter the sets."
  },
  day: {
    type: Date,
    default: Date.now
  }
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
