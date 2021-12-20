const express = require('express');
const RiddleController = require('../Controller/Riddles');
//const authController = require('../Controller/authController');
const Router = express.Router();

Router.route('/')
	.get(RiddleController.getAllRiddles)
	.post(RiddleController.CreateRiddle);

Router.route('/randomRiddle').get(RiddleController.getRandomRiddle);
Router.route('/:id').patch(RiddleController.patchRiddle);

module.exports = Router;
