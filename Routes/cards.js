const express = require('express');
const CardController = require('../Controller/Cards');

const Router = express.Router();

Router.route('/')
	.get(CardController.getAllQuestions)
	.post(CardController.CreateQuestion);
Router.route('/:type').get(CardController.getQuestion);

module.exports = Router;
