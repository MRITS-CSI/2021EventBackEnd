const mongoose = require('mongoose');
const SnakeSchema = new mongoose.Schema({
	words: {
		type: [],
		required: true,
	},
});

const Snake = mongoose.model('snake', SnakeSchema);
module.exports = Snake;
