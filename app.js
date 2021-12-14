const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

let data = fs.readdirSync("./Routes");
data.forEach((el) => {
  app.use(
    `/api/v1/${el.replace(".js", "")}`,
    require(path.join(__dirname, "Routes", el))
  );
});

module.exports = app;
