const express = require("express");
const userRouter = require("../router/user.router");
const blogRouter = require("../router/blog.router");
const commentRouter = require("../router/comment.router");
const likeRouter = require("../router/likes.router");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use("/blogs", blogRouter);
app.use("/comments", commentRouter);
app.use("/likes", likeRouter);
app.use("/users", userRouter);
module.exports = app;
