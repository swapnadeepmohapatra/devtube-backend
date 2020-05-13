const express = require('express');
const router = express.Router();
const { getLike, incLike, decLike } = require('../controllers/like');

router.post('/getLikes', getLike);
router.post('/incLikes', incLike);
router.post('/decLikes', decLike);

module.exports = router;
