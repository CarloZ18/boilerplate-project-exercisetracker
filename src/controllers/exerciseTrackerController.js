const excersiceTrackerService = require("../services/exerciseTrackerService");

const getAllUsers = (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
};

const getUsers = async (req, res) => {
  res.send(await excersiceTrackerService.getAllUsers());
};

const addNewUser = async (req, res) => {
  const newUser = {
    username: req.body.username,
  };
  const user = await excersiceTrackerService.addNewUser(newUser);
  res.send = (user)
};

module.exports = {
  getAllUsers,
  getUsers,
  addNewUser,
};
