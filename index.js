const express = require("express");
const { cors, bodyParser } = require("./middleware");
const v1ExerciseTracker = require("./src/v1/routes/exerciseTrackerRoutes");
const app = express();
require("dotenv").config();

app.use(bodyParser);
app.use(cors);
app.use(express.static("public"));
app.use("/", v1ExerciseTracker);
app.use("/api/users", v1ExerciseTracker);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
