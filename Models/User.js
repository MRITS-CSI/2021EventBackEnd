const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
	players: {
		type: [],
		required: true,
	},

	teamUsername: String,
	password: String,
	isLogged: Boolean,
	email: {
		type: String,
		required: true,
	},
	paid: Boolean,
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
