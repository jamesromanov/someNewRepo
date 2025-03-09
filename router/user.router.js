const express = require("express");
const multer = require("multer");
const {
  addUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUsersById,
} = require("../controller/user.controller");

const userRouter = express.Router();
userRouter.route("/").post(addUser).get(getAllUsers);
userRouter
  .route("/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUsersById);

module.exports = userRouter;
