const Users = require("../database/Users");

const getAllUsersService = async () => {
  try {
    const allUsers = await Users.find({});
    return allUsers;
  } catch (err) {
    console.log(err);
  }
};

const addNewUserService = async (newUser) => {
  try {
    const findUser = await Users.find({ username: newUser.username });
    if (findUser.length < 1) {
      const newUserInDB = await Users.create(newUser);
      return newUserInDB;
    } else {
      return findUser[0];
    }
  } catch (err) {
    console.log(err);
  }
};

const addNewExerciseService = async (user) => {
  const newExercise = {
    description: user.description,
    duration: user.duration,
    date: user.date,
  };
  try {
    let userModify = await Users.findById(user.id);
    userModify.log.push(newExercise);
    userModify.count++;
    userModify.save();
    return userModify;
  } catch (err) {
    console.log(err);
  }
};

const getAllExercisesService = async (id) => {
  const user = await Users.findById(id);

  return user;
};
module.exports = {
  getAllUsersService,
  addNewUserService,
  addNewExerciseService,
  getAllExercisesService,
};
