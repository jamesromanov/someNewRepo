const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
  title: { type: String },
  about: { type: String },
});

let commentModel = mongoose.model("comments", commentSchema);

module.exports = commentModel;
