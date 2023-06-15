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
    count: 0,
    log: [],
  };
  const user = await excersiceTrackerService.addNewUserService(newUser);
  res.send({ username: user.username, _id: user._id });
};

const addNewExerciseController = async (req, res) => {
  const exerciseData = {
    id: req.body._id,
    description: req.body.description,
    duration: req.body.duration,
    date:
      req.body.date !== ""
        ? new Date(req.body.date).toDateString()
        : new Date().toDateString(),
  };

  const updatedUser = await excersiceTrackerService.addNewExerciseService(
    exerciseData
  );
  res.send({
    _id: exerciseData.id,
    username: updatedUser.username,
    date: updatedUser.log[updatedUser.log.length - 1].date,
    duration: updatedUser.log[updatedUser.log.length - 1].duration,
    description: exerciseData.description,
  });
};

const getAllExercisesController = async (req, res) => {
  const allExcercises = await excersiceTrackerService.getAllExercisesService(
    req.params._id
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