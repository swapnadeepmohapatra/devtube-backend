const LikeD = require('../models/LikeD');
const DislikeD = require('../models/DislikeD');

exports.getLike = (req, res) => {
	let likeID = {};

	if (req.body.videoId) {
		lk = { videoId: req.body.videoId };
	} else {
		lk = { videoId: req.body.commentId };
	}

	LikeD.find(likeID).exec((err, likes) => {
		if (err) {
			return res.status(400).json({ error: err });
		}

		return res.status(200).json({ likes });
	});
};

exports.incLike = (req, res) => {
	let likeData = {};
	if (req.body.videoId) {
		likeData = { videoId: req.body.videoId, userId: req.body.userId };
	} else {
		likeData = { commentId: req.body.commentId, userId: req.body.userId };
	}

	const like = new Like(variable);

	like.save((err, likeResult) => {
		if (err) {
			return res.json({ error: err });
		}

		DislikeD.findOneAndDelete(variable).exec((err, disLikeResult) => {
			if (err) return res.status(400).json({ error: err });
			res.status(200).json({ likeResult });
		});
	});
};

exports.decLike = (req, res) => {
	let likeData = {};
	if (req.body.videoId) {
		likeData = { videoId: req.body.videoId, userId: req.body.userId };
	} else {
		likeData = { commentId: req.body.commentId, userId: req.body.userId };
	}

	LikeD.findOneAndDelete(variable).exec((err, result) => {
		if (err) {
			return res.status(400).json({ error: err });
		}
		res.status(200).json({ result });
	});
};
