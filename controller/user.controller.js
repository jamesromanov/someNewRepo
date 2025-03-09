const { response } = require("../utils/response");
const userModel = require("../models/user.model");
const { getAllBlogs } = require("./blog.controller");

let addUser = async (req, res, next) => {
  let users = await userModel.create(req.body);
  response(res, users);
};
let updateUserById = async (req, res, next) => {
  let id = req.params.id;
  let Allusers = await userModel.find();
  Allusers = Allusers.filter((user) => {
    if (user.id == id) {
      return user;
    }
  });
  if (!id || Allusers == "") return response(res);
  let users = await userModel.findByIdAndUpdate(id, req.body);
  response(res, { status: "updated!", users });
};
let getUserById = async (req, res, next) => {
  let id = req.params.id;
  let Allusers = await userModel.find();
  Allusers = Allusers.filter((user) => {
    if (user.id == id) {
      return user;
    }
  });
  if (!id || Allusers == "") return response(res);
  let users = await userModel.findById(id);
  response(res, users);
};
let deleteUsersById = async (req, res, next) => {
  let id = req.params.id;
  let Allusers = await userModel.find();
  Allusers = Allusers.filter((user) => {
    if (user.id == id) {
      return user;
    }
  });
  if (!id || Allusers == "") return response(res);
  let users = await userModel.findByIdAndDelete(id);
  response(res, { status: "deleted!", users }, 204);
};
let getAllUsers = async (req, res, next) => {
  let users = await userModel.find();
  response(res, users);
};
module.exports = {
  addUser,
  getAllBlogs,
  updateUserById,
  deleteUsersById,
  getAllUsers,
  getUserById,
};
