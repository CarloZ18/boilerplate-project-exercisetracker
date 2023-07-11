const Exercises = require("../database/Exercises");
const Users = require("../database/Users");

const getAllUsersService = async () => {
  try {
    const allUsers = await Users.find({}, { _id: 1, username: 1, _v: 1 });
    return allUsers;
  } catch (err) {
    console.log(err);
  }
};

const addNewUserService = async (newUser) => {
  try {
    const findUser = await Users.find({ username: newUser.username });
    const newUserInDB =
      findUser.length < 1 ? await Users.create(newUser) : findUser[0];
    newUserInDB.save();
    return { username: newUserInDB.username, _id: newUserInDB._id };
  } catch (err) {
    return err.toString();
  }
};

const addNewExerciseService = async (user) => {
  const newExercise = {
    description: user.description,
    duration: user.duration,
    date: user.date,
  };
  try {
    const userModify = await Users.findById(user.id);
    
    const { date, duration, description } = addExercise;
    const { username, _id } = userModify;
    userModify.log.push({
      description: description,
      duration: duration,
      date: date,
    });
    const addExercise = await Exercises.create(userModify.log[userModify.log.length - 1]);
    userModify.count++;
    userModify.save();
    return {
      _id: _id,
      username: username,
      date: date,
      duration: duration,
      description: description,
    };
  } catch (err) {
    return err.toString();
  }
};

const getAllExercisesService = async (id) => {
  const user = await Users.findById(id);
  return {
    _id: user.id,
    username: user.username,
    count: user.count,
    log: user.log,
  };
};
module.exports = {
  getAllUsersService,
  addNewUserService,
  addNewExerciseService,
  getAllExercisesService,
};
