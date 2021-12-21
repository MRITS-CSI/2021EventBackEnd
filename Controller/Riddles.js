const Riddles = require('../Models/Riddles');

exports.CreateRiddle = async (req, res) => {
	try {
		const data = await Riddles.create(req.body);
		res.status(200).json(data);
	} catch (err) {
		res.status(404).json({
			status: 'Failed',
			message: err.message,
		});
	}
};

exports.getRandomRiddle = async (req, res) => {
	try {
		let data = await Riddles.find({ picked: false });

		let randomIndex = Math.floor(Math.random() * data.length);

		res.status(200).json(data[randomIndex]);
	} catch (err) {
		res.status(404).json({
			status: 'Failed',
			message: err.message,
		});
	}
};

exports.patchRiddle = async (req, res) => {
	try {
		let data = await Riddles.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json(data);
	} catch (err) {
		res.status(404).json({
			status: 'Failed',
			message: err.message,
		});
	}
};

exports.getAllRiddles = async (req, res) => {
	try {
		let data = await Riddles.find();
		res.status(200).json(data);
	} catch (err) {
		res.status(404).json({
			status: 'Failed',
			message: err.message,
		});
	}
};
