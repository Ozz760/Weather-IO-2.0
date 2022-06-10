const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  commentAuthor: {
    type: String,
    require: true,
  },
  commentText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  Date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Comment = model("Comment", commentSchema); 

module.exports = Comment; 