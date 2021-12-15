const express = require('express');
const RiddleController = require('../Controller/Riddles');
const authController = require('../Controller/authController');
const Router = express.Router();

Router.route('/')
	.get(authController.protect, RiddleController.getAllRiddles)
	.post(authController.protect, RiddleController.CreateRiddle);
Router.route('/randomRiddle').get(RiddleController.getRandomRiddle);

module.exports = Router;
