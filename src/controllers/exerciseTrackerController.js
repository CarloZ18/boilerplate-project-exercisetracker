const excersiceTrackerService = require("../services/exerciseTrackerService");

const indexController = (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
};

const getAllUsersController = async (req, res) => {
  const allUsers = await excersiceTrackerService.getAllUsersService();
  res.send(allUsers);
};

const addNewUserController = async (req, res) => {
  const newUser = {
    username: req.body.username,
  };
  const user = await excersiceTrackerService.addNewUserService(newUser);
  res.send(user);
};

const addNewExerciseController = async (req, res) => {
  const exerciseData = {
    id: req.params._id,
    description: req.body.description,
    duration: req.body.duration,
    date:
      req.body.date !== ""
        ? new Date(req.body.date)
        : new Date(),
  };

  const updatedUser = await excersiceTrackerService.addNewExerciseService(
    exerciseData
  );
  res.send(updatedUser);
};

const getAllExercisesController = async (req, res) => {
  const allExcercises = await excersiceTrackerService.getAllExercisesService(
    req.params._id,
    req.query
  );
  res.send(allExcercises);
};

module.exports = {
  getAllUsersController,
  indexController,
  addNewUserController,
  addNewExerciseController,
  getAllExercisesController,
};
