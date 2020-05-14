const express = require('express');
const router = express.Router();
const { getDislike, incDisLike, decDisLike } = require('../controllers/dislike');

router.post('/getDisikes', getDislike);
router.post('/incDislikes', incDisLike);
router.post('/decDislikes', decDisLike);

module.exports = router;
