const Users = require("../database/Users");

const getAllUsers = async () => {
  try {
    return await Users.find({});
  } catch (err) {
    console.log(err);
  }
};

const addNewUser = async (newUser) => {
  try {
    const findUser = await Users.find({ username: newUser.username });
    if (findUser.length < 1) {
      return await Users.create(newUser);
    }else{
      return findUser[0]
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getAllUsers,
  addNewUser,
};
