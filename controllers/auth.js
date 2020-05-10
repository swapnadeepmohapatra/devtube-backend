const User = require('../models/user');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
	const error = validationResult(req);
	if (!error.isEmpty()) {
		return res.status(422).json({
			error: error.array()[0].msg,
		});
	}

	const user = new User(req.body);
	user.save((error, user) => {
		if (error) {
			return res.status(400).json({
				error: error.errmsg,
			});
		}
		res.json({
			name: user.name,
			email: user.email,
			id: user._id,
		});
	});
};

exports.signout = (req, res) => {
	res.clearCookie('token');
	res.json({ message: 'User Signout Successful' });
};

exports.signin = (req, res) => {
	const { email, password } = req.body;
	const error = validationResult(req);

	if (!error.isEmpty()) {
		return res.status(422).json({
			error: error.array()[0].msg,
		});
	}

	User.findOne({ email }, (error, user) => {
		if (error || !user) {
			return res.status(400).json({ error: "User doesn't exist" });
		}

		if (!user.authenticate(password)) {
			return res.status(401).json({ error: 'Email and Password do not match' });
		}

		const token = jwt.sign({ _id: user._id }, process.env.SECRET);
		res.cookie(('token', token, { expire: new Date() + 9999 }));

		const { _id, name, email, role } = user;
		return res.json({
			token,
			user: {
				_id,
				name,
				email,
				role,
			},
		});
	});
};
