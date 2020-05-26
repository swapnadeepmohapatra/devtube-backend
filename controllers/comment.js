const Comment = require("../models/CommentD");

exports.saveComment = (req, res) => {
  const comment = new Comment(req.body);

  comment.save((err, comment) => {
    if (err) return res.json({ success: false, err });

    Comment.find({ _id: comment._id })
      .populate("writer")
      .exec((err, comment) => {
        if (err) return res.json({ error: err });
        return res.status(200).json({ comment });
      });
  });
};

exports.getComments = (req, res) => {
  Comment.find({ postId: req.body.videoId })
    .populate("writer")
    .exec((err, comments) => {
      if (err) return res.status(400).send({ error: err });
      res.status(200).json({ comments });
    });
};
