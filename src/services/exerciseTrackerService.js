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
    if (userModify.count < 1) {
      userModify.log[0].description = user.description;
      userModify.log[0].duration = user.duration;
      userModify.log[0].date =
        user.date !== null ? user.date : new Date.toString();
    } else {
      userModify.log.push(newExercise);
    }
    userModify.count++;
    userModify.save();
    return userModify;
  } catch (err) {
    console.log(err);
  }
};

const getAllExercisesService = async (id) => {
  return await Users.findById(id);
};
module.exports = {
  getAllUsersService,
  addNewUserService,
  addNewExerciseService,
  getAllExercisesService,
};
