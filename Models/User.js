const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
	players: {
		type: [],
		required: true,
	},

	teamUsername: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	isLogged: Boolean,
	email: {
		type: String,
		required: true,
	},
	paid: Boolean,
	cardsGambitScore: Number,
	pass: {
		type: String,
		required: true,
	},
	submitted: {
		type: Boolean,
		default: false,
		required: true,
	},
	secondRound: Boolean,
	thirdRound: Boolean,
});
UserSchema.pre('save', async function (next) {
	let hashedPass = await bcrypt.hash(this.password, 16);
	this.password = hashedPass;
	next();
});

UserSchema.methods.checkPass = async (inputPass, hashedPass) => {
	return await bcrypt.compare(inputPass, hashedPass);
};
const User = mongoose.model('user', UserSchema);
module.exports = User;
