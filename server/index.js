const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./model/user");
const Question = require("./model/question");
const Option = require("./model/option");
const Discovery = require("./model/discovery");
const Discoveryanswer = require("./model/discoveryanswer");
require("./database/dbconfig");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["POST", "GET"],
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log("Listening to port 3001 ");
});
