const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Number, default: Date.now() },
});

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
