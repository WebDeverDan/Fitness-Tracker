const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises:[
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
    },
    distance: {
      type: Number,
      unique: true,
    },
    weight: {
      type: Number,
      unique: true,
    },
    reps: {
      type: Number,
      unique: true,
    },
    sets: {
      type: Number,
      unique: true,
    },
    }
],
});

const workouts = mongoose.model("workouts", workoutSchema);

module.exports = workouts;