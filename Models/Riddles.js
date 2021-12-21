const mongoose = require('mongoose');

const RiddlesSchema = new mongoose.Schema({
	riddle: {
		required: true,
		type: String,
	},
	answer: {
		type: String,
		required: true,
	},
	picked: {
		type: Boolean,
		default: false,
		required: true,
	},
});

const Riddles = mongoose.model('riddle', RiddlesSchema);
module.exports = Riddles;
