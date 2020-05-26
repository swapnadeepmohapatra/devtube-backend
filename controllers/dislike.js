const LikeD = require("../models/LikeD");
const DislikeD = require("../models/DislikeD");

exports.getDislike = (req, res) => {
  let dislikeId = {};

  if (req.body.videoId) {
    dislikeId = { videoId: req.body.videoId };
  } else {
    dislikeId = { commentId: req.body.commentId };
  }

  DislikeD.find(dislikeId).exec((err, dislike) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    return res.status(200).json({ dislike });
  });
};

exports.incDisLike = (req, res) => {
  let dislikeData = {};
  if (req.body.videoId) {
    dislikeData = { videoId: req.body.videoId, userId: req.body.userId };
  } else {
    dislikeData = { commentId: req.body.commentId, userId: req.body.userId };
  }

  const disLike = new DislikeD(dislikeData);

  disLike.save((err, dislikeResult) => {
    if (err) return res.json({ error: err });

    LikeD.findOneAndDelete(dislikeData).exec((err, likeResult) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.status(200).json({ dislikeResult });
    });
  });
};

exports.decDisLike = (req, res) => {
  dislikeData = {};

  if (req.body.videoId) {
    dislikeData = { videoId: req.body.videoId, userId: req.body.userId };
  } else {
    dislikeData = { commentId: req.body.commentId, userId: req.body.userId };
  }

  DislikeD.findOneAndDelete(dislikeData).exec((err, result) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json({ result });
  });
};
