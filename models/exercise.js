const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const exerciseSchema = new Schema({
   
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
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
