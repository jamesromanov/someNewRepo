const mongoose = require("mongoose");
const env = require("dotenv").config();

let connectDb = () => {
  try {
    console.log(process.env.DATABASE, process.env.PASSWORD);
    mongoose
      .connect(
        process.env.DATABASE.replace("<db_password>", process.env.PASSWORD)
      )
      .then(() => {
        console.log("Db connected succesfully!");
      });
  } catch (error) {
    console.log("Db connection error:", error);
  }
};

module.exports = { connectDb };
