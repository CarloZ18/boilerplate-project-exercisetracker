require("dotenv").config();
const mongoose = require("mongoose");

//Connect database
mongoose.connect(
  "mongodb+srv://CarloZ:153624@cluster0.g7rgryz.mongodb.net/fcc-exercise-tracker-project?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//Model
const usersSchema = new mongoose.Schema({
  username: String,
  count: Number,
  log: [{ description: String, duration: Number, date: String }],
});

let Users = mongoose.model("Users", usersSchema);
module.exports = Users;