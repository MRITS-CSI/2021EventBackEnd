const User = require('../Models/User');

exports.CreateUser = async (req, res) => {
	try {
		const Data = await User.create(req.body);

		res.status(200).json(Data);
	} catch (err) {
		res.status(404).json({
			status: 'Error',
			message: err.message,
		});
	}
};
exports.GetUser = async (req, res) => {
	try {
		const Data = await User.find();

		res.status(200).json(Data);
	} catch (err) {
		res.status(404).json({
			status: 'Error',
			message: err.message,
		});
	}
};
