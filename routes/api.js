const router = require("express").Router();
const Workout = require("../models/workouts.js");



// need route to add exercise
router.post("/:id", ({ body }, res) => {
  Workout.create(body)
    .then(dbworkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// need route to createworkout
router.post("/", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbworkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});










module.exports = router;
