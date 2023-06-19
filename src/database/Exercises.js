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
  description: { type: String, required: true },
  duration: { type: Number, min: 1, required: true },
  date: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\w{3}\s\w{3}\s\d{2}\s\w{4}/gm.test(v);
      },
    },
    required: true,
  },
});

let Exercises = mongoose.model("Exercises", exercisesSchema);
module.exports = Exercises;
