const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const exerciseSchema = require('./exercise')

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercise:{ exerciseSchema }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
