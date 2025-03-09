const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  addBlog,
  getAllBlogs,
  getById,
  deleteById,
  updateBlogById,
} = require("../controller/blog.controller");
const blogRouter = express.Router();
let storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        "-" +
        Math.floor(Math.random()) * 1000 +
        "-" +
        "blog" +
        (path.extname(file.originalname) ?? file.originalname)
    );
  },
});

let upload = multer({
  storage: storage,
  limits: { fileSize: 1024 ** 1024 * 3 },
  fileFilter: (req, file, cb) => {
    if (path.extname(file.originalname) == ".jpg" || ",png") {
      cb(null, true);
    } else {
      cb(new Error("Please make sure the filetype mathes the .png or .jpg!"));
    }
  },
});

blogRouter.route("/").post(upload.single("image"), addBlog).get(getAllBlogs);
blogRouter
  .route("/:id")
  .get(getById)
  .delete(deleteById)
  .put(upload.any(), updateBlogById);

module.exports = blogRouter;
