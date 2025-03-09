const mongoose = require("mongoose");

let likesSchema = new mongoose.Schema({
  count: { type: Number },
});

let likesModel = mongoose.model("likes", likesSchema);

module.exports = likesModel;
