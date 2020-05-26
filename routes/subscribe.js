const express = require("express");
const router = express.Router();
const {
  subscribe,
  unsubscribe,
  isSubscribed,
  getSubscriberById,
} = require("../controllers/subscribe");

router.post("/subscribe", subscribe);
router.post("/unSubscribe", unsubscribe);
router.post("/isSubscribed", isSubscribed);
router.post("/getSubscriberById", getSubscriberById);

module.exports = router;
