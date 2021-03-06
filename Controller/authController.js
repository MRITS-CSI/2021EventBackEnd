const User = require('../Models/User');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
	try {
		const { username, password } = req.body;
		if (username && password) {
			const user = await User.findOne({ teamUsername: username });
			if (user && (await user.checkPass(password, user.password))) {
				let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
					expiresIn: process.env.JWT_SECRET_EXPIRATION,
				});

				//res.cookie('jwt', token, cookieOptions);
				res.status(200).json({ status: 'ok', token, user });
			} else {
				res.status(404).json({ status: 'User not found / Wrong Password' });
			}
		} else {
			res
				.status(404)
				.json({ status: 'Failed', message: 'Provide username and password' });
		}
	} catch (err) {
		res.status(404).json({ status: 'Failed', message: err.message });
	}
};

exports.protect = async (req, res, next) => {
	if (req.body.jwt) {
		let decoded = jwt.verify(req.body.jwt, process.env.JWT_SECRET);
		const user = await User.findById(decoded.id);
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		next();
	} else {
		res.status(400).json({
			message: 'Missing proper access rights',
		});
	}
};

exports.checkToken = async (req, res) => {
	try {
		if (req.body.jwt) {
			let decoded = jwt.verify(req.body.jwt, process.env.JWT_SECRET);
			const user = await User.findById(decoded.id);
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			res.status(200).json({ status: 'verified', ...user });
		} else {
			res.status(400).json({
				message: 'Missing proper access rights',
			});
		}
	} catch (err) {
		res.status(404).json({ status: 'Failed', message: err.message });
	}
};

exports.logout = async (req, res) => {
	const cookieOptions = {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true,
		//secure: true,
	};
	res.cookie('jwt', 'logged out successfully', cookieOptions);
	res.status(200).json({ status: 'Logged Out' });
};
