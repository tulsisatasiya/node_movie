const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Movie_ticket")
    .then(() => {
      console.log("connection success");
    })
    .catch((err) => {
      console.log(err, "error");
    });
};

module.exports = { connectDB };