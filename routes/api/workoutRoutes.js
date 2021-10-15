const router = require("express").Router();
const Workout = require("../../models/workouts.js");


// need route to add exercise
router.put("/:id", ({ body, params }, res) => {
  // this will look up the id in the document and will push the body of the exercises array
  Workout.update({_id: params.id}, {$push:{exercises:body}})
    .then(dbworkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// need route to createworkout
router.post("/", ({ body }, res) => {
  console.log(body)
  Workout.create(body)
    .then(dbworkout => {
      console.log(dbworkout)
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// // need route to get last workout
router.get("/", (req, res) => {
  Workout.aggregate([
    {
      $addFields:{
        totalDuration: {$sum: "$exercises.duration"} 
      }
    }
  ])
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// need route to get workouts in date range (in stats page)
router.get("/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields:{
        totalDuration: {$sum: "$exercises.duration"} 
      }
    }
  ])
  .sort({ date: -1 })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// need route to add up duration for each workout 
// router.get("/", (req, res) => {
//   Workout.find({})
//     // .sort({ date: -1 })
//     // .then(dbWorkout => {
//     //   res.json(dbWorkout);
//     // })
//     // .catch(err => {
//     //   res.status(400).json(err);
//     // });
// });









module.exports = router;
