const SubscribeD = require('../models/SubscriberD');

exports.subscribe = (req, res) => {
	const subscribe = new SubscribeD(req.body);

	subscribe.save((err, subscriber) => {
		if (err) {
			return res.status(400).json({ error: err });
		}

		return res.status(400).json({ subscriber });
	});
};

exports.unsubscribe = (req, res) => {
	SubscribeD.findOneAndDelete({ userTo: req.body.userTo, userFrom: req.body.userFrom }).exec((err, unsubscribed) => {
		if (err) {
			return res.status(400).json({ error: err });
		}

		res.status(200).json({ unsubscribed });
	});
};

exports.getSubscriberById = (req, res) => {
	SubscribeD.find({ userTo: req.body.userTo }).exec((err, subscribed) => {
		if (err) {
			return res.status(400).json({ error: err });
		}

		res.status(200).json({ subscriberNumber: subscribed.length });
	});
};

exports.isSubscribed = (req, res) => {
	SubscribeD.find({ userTo: req.body.userTo, userFrom: req.body.userFrom }).exec((err, subscribed) => {
		if (err) {
			return res.status(400).json({ error: err });
		}

		let isSubscribed = false;
		if (subscribed.length !== 0) {
			isSubscribed = true;
		}

		res.status(200).json({ subscribed: isSubscribed });
	});
};
