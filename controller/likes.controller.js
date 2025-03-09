const { response } = require("../utils/response");
const likesModel = require("../models/likes.model");

let addLikes = async (req, res, next) => {
  let { count } = req.body;
  let likes = await likesModel.create({ count });
  response(res, likes, 201);
};
let updateLike = async (req, res, next) => {
  let id = req.params.id;
  let likes = await likesModel.find();
  likes = likes.filter((x) => {
    if (x.id == id) {
      return x;
    }
  });

  if (!id || likes == "") return response(res);
  let { count } = req.body;
  let like = await likesModel.findByIdAndUpdate(id, { count });
  response(res, { message: "Update!", like });
};

let deleteLike = async (req, res, next) => {
  let id = req.params.id;
  let likes = await likesModel.find();
  likes = likes.filter((x) => {
    if (x.id == id) {
      return x;
    }
  });

  if (!id || likes == "") return response(res);
  let like = await likesModel.findByIdAndDelete(id);
  response(res, { message: "deleted!", like }, 204);
};

let getLikeById = async (req, res, next) => {
  let id = req.params.id;
  let likes = await likesModel.find();
  likes = likes.filter((x) => {
    if (x.id == id) {
      return x;
    }
  });

  if (!id || likes == "") return response(res);
  let like = await likesModel.findById(id);
  response(res, like);
};
let getAllLikes = async (req, res, next) => {
  let likes = await likesModel.find();
  response(res, likes);
};
module.exports = { getLikeById, getAllLikes, deleteLike, updateLike, addLikes };
