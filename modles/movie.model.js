const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    releaseDate: {
        type: Date,
    },
    director: {
        type: String,
    },
    actors: {
        type: [String],
    },
    duration: {
        type: String, 
    },
    rating: {
        type: Number, 
    },
});

const Movie = mongoose.model("movieSchema", movieSchema);

module.exports = Movie;
