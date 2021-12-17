const User = require('../Models/User');
const jwt = require('jsonwebtoken');
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
		let query =  User.find();
		if(req.query.sort){
			query=query.sort(req.query.sort)
		}
		if(req.query.limit && req.query.page){
			let limit = req.query.limit
			let skip = (req.query.page -1)*limit
			query=query.skip(skip).limit(limit)
		}


		const data = await query


		res.status(200).json(data);
	} catch (err) {
		res.status(404).json({
			status: 'Error',
			message: err.message,
		});
	}
};

exports.patchUser = async (req, res) => {
	try {
		if (req.body.jwt) {
			let decoded = jwt.verify(req.body.jwt, process.env.JWT_SECRET);
			const user = await User.findByIdAndUpdate(decoded.id, {
				cardsGambitScore: req.body.score,
				submitted: true,
			});
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			return res.status(200).json({ status: 'ok', ...user });
		}
		return res
			.status(404)
			.json({ status: 'failed', message: 'User is logged out / Not Found' });
	} catch (err) {
		console.log(err);
		res.status(404).json({
			status: 'Error',
			message: err.message,
		});
	}
};
