const User = require('../models/UserD');

exports.getUserById = (req, res, next, id) => {
	User.findById(id).exec((error, user) => {
		if (error || !user) {
			return res.status(400).json({
				message: 'No user found',
			});
		}
		req.profile = user;
		next();
	});
};
