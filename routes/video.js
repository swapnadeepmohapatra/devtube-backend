const express = require('express');
const router = express.Router();
const { getAllVideos, getVideoById, saveVideo, getSubscriptionVideos } = require('../controllers/video');

router.post('/saveVideo', saveVideo);
router.get('/getVideos', getAllVideos);
router.post('/getVideoById', getVideoById);
router.post('/getSubscriptionVideos', getSubscriptionVideos);

module.exports = router;
