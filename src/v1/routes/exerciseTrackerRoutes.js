const express = require("express");
const router = express.Router();
const excersiceTrackerController=require("../../controllers/exerciseTrackerController")

router.get("/", excersiceTrackerController.indexController);
router.get("/api/users", excersiceTrackerController.getAllUsersController);
router.post("/api/users", excersiceTrackerController.addNewUserController);
router.post("/api/users/:_id/exercises", excersiceTrackerController.addNewExerciseController);
router.get("/api/users/:_id/logs", excersiceTrackerController.getAllExercisesController);
module.exports = router;