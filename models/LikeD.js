const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    commentId: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
    videoId: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", LikeSchema);
module.exports = Like;
