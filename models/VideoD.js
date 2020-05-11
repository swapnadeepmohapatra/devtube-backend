const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
	{
		writer: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		title: {
			type: String,
			maxlength: 50,
		},
		description: {
			type: String,
		},
		privacy: {
			type: Number,
		},
		filePath: {
			type: String,
		},
		catogory: String,
		views: {
			type: Number,
			default: 0,
		},
		duration: {
			type: String,
		},
		thumbnail: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
