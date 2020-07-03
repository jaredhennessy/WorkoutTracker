const router = require("express").Router();
const Workout = require("../models");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.get("/api/workouts/range", (req, res) => {
// router.put("/api/workouts", (req, res) => {

module.exports = router;
