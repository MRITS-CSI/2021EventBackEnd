const express = require('express');
const SnakeController = require('../Controller/Snake');
const Router = express.Router();

Router.route('/')
	.get(SnakeController.GetAllWords)
	.post(SnakeController.CreateWord);

module.exports = Router;
