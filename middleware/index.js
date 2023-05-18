const bodyParser = require("body-parser");
const cors = require("cors");

module.exports.bodyParser = bodyParser.urlencoded({ extended: false });
module.exports.cors = cors();