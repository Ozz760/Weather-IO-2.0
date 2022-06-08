const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  comment: {
    type: Text,
    required: true,
  },
});
