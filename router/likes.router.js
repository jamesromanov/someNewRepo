const express = require("express");
const {
  getAllLikes,
  addLikes,
  getLikeById,
  updateLike,
  deleteLike,
} = require("../controller/likes.controller");
const { deleteById } = require("../controller/blog.controller");

const likeRouter = express.Router();

likeRouter.route("/").get(getAllLikes).post(addLikes);
likeRouter.route("/:id").get(getLikeById).put(updateLike).delete(deleteLike);

module.exports = likeRouter;
