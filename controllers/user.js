const User = require("../models/UserD");

exports.getUser = (req, res) => {
  return res.json({
    _id: req.profile._id,
    isAdmin: req.profile.role === 0 ? false : true,
    isAuth: true,
    email: req.profile.email,
    name: req.profile.name,
    role: req.profile.role,
    image: req.profile.image,
  });
};

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: "No user found",
      });
    }
    req.profile = user;
    next();
  });
};
