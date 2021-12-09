const Snake = require('../Models/Snake');

exports.GetAllWords = async (req, res) => {
	try {
		const data = await Snake.find();
		let index = Math.floor(Math.random() * data.length);
		res.status(200).json(data[index]);
	} catch (err) {
		res.status(404).json({
			status: 'Failed',
			message: err.message,
		});
	}
};

exports.CreateWord = async (req, res) => {
	try {
		const data = await Snake.create(req.body);

		res.status(200).json(data);
	} catch (err) {
		res.status(404).json({
			status: 'Failed',
			message: err.message,
		});
	}
};
