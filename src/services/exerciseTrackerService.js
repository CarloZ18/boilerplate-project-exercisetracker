const Exercises = require("../database/Exercises");
const Users = require("../database/Users");

const getAllUsersService = async () => {
  try {
    const allUsers = await Users.find({}, { _id: 1, username: 1, _v: 1 });
    if (!allUsers) {
      return "No users";
    } else {
      return allUsers;
    }
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

const addNewExerciseService = async (id, exercise) => {
  try {
    const userModify = await Users.findById(id);
    const { description, duration, date } = exercise;
    if (!userModify) {
      throw new Error("Could not find user");
    } else {
      const newExercise = new Exercises({
        user_id: id,
        description: description,
        duration: duration,
        date: date ? new Date(date) : new Date(),
      });

      userModify.save();
      const addExercise = await newExercise.save();
      return {
        _id: id,
        username: userModify.username,
        date: new Date(addExercise.date).toDateString(),
        duration: addExercise.duration,
        description: addExercise.description,
      };
    }
  } catch (err) {
    return err.toString();
  }
};

const getAllExercisesService = async (id, querys) => {
  try {
    const { from, to, limit } = querys;
    const user = await Users.findById(id);
    if (!user) {
      ("Could not find user");
    }
    let dateObj = {};
    if (from) {
      dateObj["$gte"] = new Date(from);
    }
    if (to) {
      dateObj["$lte"] = new Date(to);
    }
    let filter = {
      user_id: id,
    };
    if (from || to) {
      filter.date = dateObj;
    }

    const exercises = await Exercises.find(filter).limit(+limit ?? 500);

    const log = exercises.map((e) => ({
      description: e.description,
      duration: e.duration,
      date: new Date(e.date).toDateString(),
    }));
    return {
      username: user.username,
      count: exercises.length,
      _id: id,
      log,
    };
  } catch (err) {
    return err.toString();
  }
};
module.exports = {
  getAllUsersService,
  addNewUserService,
  addNewExerciseService,
  getAllExercisesService,
};
