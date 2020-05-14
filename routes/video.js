const express = require('express');
const router = express.Router();
const { getAllVideos, getVideoById, saveVideo } = require('../controllers/video');

router.post('/saveVideo', saveVideo);
router.post('/getVideos', getAllVideos);
router.post('/getVideoById', getVideoById);

module.exports = router;
