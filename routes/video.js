const express = require("express");
const router = express.Router();
const {
  getAllVideos,
  getVideoById,
  saveVideo,
  getSubscriptionVideos,
  getRecommendedVideos,
  getTrendingVideos,
} = require("../controllers/video");

router.post("/saveVideo", saveVideo);
router.get("/getVideos", getAllVideos);
router.post("/getVideoById", getVideoById);
router.post("/getSubscriptionVideos", getSubscriptionVideos);
router.get("/getTrendingVideos", getTrendingVideos);
router.post("/getRecommendedVideos", getRecommendedVideos);

module.exports = router;
