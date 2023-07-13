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
const exercisesSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: {
    type: Date,
    required: true,
  },
});

let Exercises = mongoose.model("Exercises", exercisesSchema);
module.exports = Exercises;
