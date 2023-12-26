const mongoose = require("mongoose");

const movielistSchema = new mongoose.Schema({
  movie_title: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movieSchema",
  },
  cinema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cinemaSchema",
  },
});


const Movielist = mongoose.model("movielistSchema", movielistSchema);

module.exports = Movielist;
