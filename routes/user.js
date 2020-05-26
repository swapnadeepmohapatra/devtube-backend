const express = require("express");
const router = express.Router();
const User = require("../models/UserD");

const { isAuthenticated, isSignedIn } = require("../middleware/auth");
const { getUserById } = require("../middleware/user");
const { getUser } = require("../controllers/user");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

module.exports = router;
