const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercise:[
    {
    type: {
      type: String,
      trim: true,
      required: "type is Required"
    },
    name: {
      type: String,
      trim: true,
      required: "type is Required"
    },
    duration: {
      type: Number,
      unique: true,
      required: true
    },
    weight: {
      type: Number,
      unique: true,
      required: false
    },
    reps: {
      type: Number,
      unique: true,
      required: false
    },
    sets: {
      type: Number,
      unique: true,
      required: false
    },
    }
],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
