const router = require('express').Router();
const { Workout } = require('../models');


// need route to get last workout
// this one should go in display routes
router.get("/", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// need route to get workouts in date range
// this one should go in display routes
// use aggregate information found in README
router.get("/", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    // .then(dbWorkout => {
    //   res.json(dbWorkout);
    // })
    // .catch(err => {
    //   res.status(400).json(err);
    // });
});

















  router.get('/exercise.html', (req, res) => {
    console.log('exercise');
    res.render('exercise');
  });
  router.get('/stats.html', (req, res) => {
    console.log('stats');
    res.render('stats');
  });
  
  module.exports = router;