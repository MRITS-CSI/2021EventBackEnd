const Cards = require('../Models/CardsGambit');

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
		let data = await Cards.find({ cardType: req.params.type });
		res.status(200).json(data);
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
