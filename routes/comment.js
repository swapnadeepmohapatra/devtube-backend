const express = require("express");
const { getComments, saveComment } = require("../controllers/comment");

const router = express.Router();

router.post("/saveComment", saveComment);
router.post("/getComments", getComments);

module.exports = router;
