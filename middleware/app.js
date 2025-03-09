const express = require("express");
const userRouter = require("../router/user.router");
const blogRouter = require("../router/blog.router");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use("/blogs", blogRouter);
app.use("/users", userRouter);
module.exports = app;
