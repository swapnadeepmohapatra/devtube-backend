const Video = require("../models/VideoD");
const Subscriber = require("../models/SubscriberD");

exports.saveVideo = (req, res) => {
  const video = new Video(req.body);

  video.save((err, video) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    return res.status(200).json({ video });
  });
};

exports.getAllVideos = (req, res) => {
  Video.find()
    .populate("writer")
    .exec((err, videos) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({ videos });
    });
};

exports.getVideoById = (req, res) => {
  Video.findById(req.body.videoId)
    .populate("writer")
    .exec((err, video) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({ video });
    });
};

exports.getSubscriptionVideos = (req, res) => {
  Subscriber.find({
    userFrom: req.body.userFrom,
  }).exec((err, subscribers) => {
    let subscribedChannels = [];

    subscribers.map((subscriber, i) => {
      subscribedChannels.push(subscriber.userTo);

      Video.find({ writer: { $in: subscribedChannels } })
        .populate("writer")
        .sort({ _id: -1 })
        .exec((err, videos) => {
          if (err) {
            return res.status(400).json({ error: err });
          }

          res.status(200).json({ videos });
        });
    });
  });
};

exports.getRecommendedVideos = (req, res) => {
  let videoId = req.body.videoId;

  Video.findOneAndUpdate({ _id: videoId }, { $inc: { views: 1 } }).exec(
    (err, vdo) => {
      if (err) {
        console.log(err);
      }
      Video.find({ _id: { $ne: req.body.videoId } })
        .sort({ views: -1 })
        .limit(5)
        .populate("writer")
        .exec((err, videos) => {
          if (err) {
            return res.status(400).json({ error: err });
          }

          return res.status(200).json({ videos });
        });
    }
  );
};

exports.getTrendingVideos = (req, res) => {
  Video.find()
    .sort({ views: -1 })
    .populate("writer")
    .exec((err, videos) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({ videos });
    });
};
