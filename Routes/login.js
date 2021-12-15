const express = require("express");
const authController = require("../Controller/authController");
const Router = express.Router();
Router.route("/").post(authController.login);
Router.route("/logout").post(authController.logout);
Router.route("/check").post(authController.checkToken);

module.exports = Router;
