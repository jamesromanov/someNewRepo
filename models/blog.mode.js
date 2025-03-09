const mongoose = require("mongoose");

let blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    type: String,
    required: true,
  },
  createdAt: { type: String, default: Date.now() },
  image: { type: String },
});

let blogModel = mongoose.model("blogsUser", blogSchema);

module.exports = blogModel;
