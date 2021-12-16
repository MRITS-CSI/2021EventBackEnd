const mongoose = require('mongoose');

const CardsSchema = new mongoose.Schema({
	question: {
		type: String,
		required: true,
	},
	option: {
		type: [],
		required: true,
	},
	answer: {
		type: String,
		required: true,
	},
	cardType: {
		type: String,
		enum: ['SPADE', 'HEART', 'CLOVER', 'DIAMOND'],
		required: true,
	},
});

const Cards = mongoose.model('cards', CardsSchema);

module.exports = Cards;
