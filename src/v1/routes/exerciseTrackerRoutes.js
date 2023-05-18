const express = require("express");
const router = express.Router();
const excersiceTrackerController=require("../../controllers/exerciseTrackerController")

router.get("/", excersiceTrackerController.getAllUsers);
router.get("/api/users", excersiceTrackerController.getUsers);
router.post("/api/users", excersiceTrackerController.addNewUser);

module.exports = router;