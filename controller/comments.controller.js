const { response } = require("../utils/response");
const commentModel = require("../models/comments.model");

let addComment = async (req, res, next) => {
  let { title, about } = req.body;
  let comments = await commentModel.create({ title, about });
  response(res, comments, 201);
};
let deleteComment = async (req, res, next) => {
  let id = req.params.id;
  let comments = await commentModel.find();
  comments = comments.filter((c) => {
    if (c.id == id) {
      return c;
    }
  });
  if (!id || comments == "") return response(res);
  let commnet = await commentModel.findByIdAndDelete(id);
  response(res, { message: "deleted!", commnet }, 204);
};
let updateComment = async (req, res, next) => {
  let id = req.params.id;
  let comments = await commentModel.find();
  comments = comments.filter((c) => {
    if (c.id == id) {
      return c;
    }
  });
  if (!id || comments == "") return response(res);
  let { title, about } = req.body;
  let comment = await commentModel.findByIdAndUpdate(id, { title, about });
  response(res, { message: "Updated!", comment });
};
let getCommentById = async (req, res, next) => {
  let id = req.params.id;
  let comments = await commentModel.find();
  comments = comments.filter((c) => {
    if (c.id == id) {
      return c;
    }
  });
  if (!id || comments == "") return response(res);
  let comment = await commentModel.findById(id);
  response(res, comment);
};
let getAllComments = async (req, res, next) => {
  let comments = await commentModel.find();
  response(res, comments);
};

module.exports = {
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment,
  addComment,
};
