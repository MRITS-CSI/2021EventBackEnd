const Cards = require('../Models/CardsGambit');
const _ = require('lodash');

exports.CreateQuestion = async (req, res) => {
	try {
		const data = await Cards.create(req.body);
		res.status(200).json(data);
	} catch (err) {
		res.status(404).json({
			status: 'Failed',
			message: err.message,
		});
	}
};

exports.getQuestion = async (req, res) => {
	try {
		let data1 = await Cards.find({ cardType: req.params.type, qType: false });
		let data2 = await Cards.find({ cardType: req.params.type, qType: true });
		let shuffledData1 = _.shuffle(data1);
		let shuffledData2 = _.shuffle(data2);
		res.status(200).json([...shuffledData1, ...shuffledData2]);
	} catch (err) {
		res.status(404).json({
			status: 'Failed',
			message: err.message,
		});
	}
};

exports.getAllQuestions = async (req, res) => {
	try {
		let data = await Cards.find();
		res.status(200).json(data);
	} catch (err) {
		res.status(404).json({
			status: 'Failed',
			message: err.message,
		});
	}
};
