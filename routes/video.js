const express = require('express');
const router = express.Router();
const {
	getAllVideos,
	getVideoById,
	saveVideo,
	getSubscriptionVideos,
	getRecommendedVideos,
} = require('../controllers/video');

router.post('/saveVideo', saveVideo);
router.get('/getVideos', getAllVideos);
router.post('/getVideoById', getVideoById);
router.post('/getSubscriptionVideos', getSubscriptionVideos);
router.post('/getRecommendedVideos', getRecommendedVideos);

module.exports = router;
