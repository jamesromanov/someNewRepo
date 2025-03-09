const express = require("express");
const {
  getAllComments,
  addComment,
  getCommentById,
  deleteComment,
  updateComment,
} = require("../controller/comments.controller");

const commentRouter = express.Router();

commentRouter.route("/").get(getAllComments).post(addComment);
commentRouter
  .route("/:id")
  .get(getCommentById)
  .delete(deleteComment)
  .put(updateComment);

module.exports = commentRouter;
