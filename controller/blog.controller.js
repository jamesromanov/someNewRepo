const { response } = require("../utils/response");
const blogModel = require("../models/blog.mode");

let addBlog = async (req, res, next) => {
  let blogs = new blogModel();
  blogs.title = req.body.title;
  blogs.author = req.body.author;
  blogs.image = req.file ? req.file.path : "none";
  blogs.content = req.body.content;
  blogs.save();
  response(res, { massage: "Succesfully added!", blogs }, 201);
};

let updateBlogById = async (req, res, next) => {
  let id = req.params.id;
  let Allblogs = await blogModel.find();
  Allblogs = Allblogs.filter((x) => {
    if (x.id == id) {
      return x;
    }
  });
  if (!id || Allblogs == "") return response(res);
  let blogs = await blogModel.findByIdAndUpdate(id, req.body);
  response(res, { status: "Updated!", blogs });
};
let deleteById = async (req, res, next) => {
  let id = req.params.id;
  let Allblogs = await blogModel.find();
  Allblogs = Allblogs.filter((x) => {
    if (x.id == id) {
      return x;
    }
  });
  if (!id || Allblogs == "") return response(res);
  let blogs = await blogModel.findByIdAndDelete(id);

  response(res, { message: "Deleted!", blogs }, 204);
};
let getById = async (req, res, next) => {
  let id = req.params.id;
  let Allblogs = await blogModel.find();
  Allblogs = Allblogs.filter((x) => {
    if (x.id == id) {
      return x;
    }
  });
  if (Allblogs == "") return response(res);
  let blogs = await blogModel.findById(id);
  response(res, blogs);
};
let getAllBlogs = async (req, res, next) => {
  let blogs = await blogModel.find();
  response(res, blogs);
};
module.exports = { addBlog, getAllBlogs, getById, deleteById, updateBlogById };
