const expressJwt = require('express-jwt');

exports.isAuthenticated = (req, res, next) => {
	let checker = req.profile && req.auth && req.profile._id == req.auth._id;
	if (!checker) {
		return res.status(403).json({
			error: 'access denied',
		});
	}
	next();
};

exports.isAdmin = (req, res, next) => {
	if (req.profile.role === 0) {
		res.status(403).json({
			message: 'You are not an admin, access denied',
		});
	}
	next();
};

exports.isSignedIn = expressJwt({
	secret: process.env.SECRET,
	userProperty: 'auth',
});
