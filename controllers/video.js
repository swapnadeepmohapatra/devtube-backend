const Video = require('../models/VideoD');

exports.saveVideo = (req, res) => {
	const video = new Video(req.body);

	video.save((err, video) => {
		if (err) {
			return res.status(400).json({ error: 'Video Upload Failed' });
		}

		return res.status(200).json({ video });
	});
};

exports.getAllVideos = (req, res) => {
	Video.find()
		.populate('writer')
		.exec((err, videos) => {
			if (err) {
				return res.status(400).json({ error: err });
			}

			return res.status(200).json({ videos });
		});
};

exports.getVideoById = (req, res) => {
	Video.findById(req.body.videoId)
		.populate('writer')
		.exec((err, video) => {
			if (err) {
				return res.status(400).json({ error: err });
			}

			return res.status(200).json({ video });
		});
};
