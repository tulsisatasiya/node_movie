const { movie_Scheama } = require("../modles");

//movie

//add
const addMovie = (body) => {
  return movie_Scheama.create(body);
};
//get valid
const getMovieBy= (title) => {
 return movie_Scheama.findOne({ title });
};
//get
const getMovie = async (req, res) => {
    return movie_Scheama.find();
};
//delete
const deleteMovie = (id) => {
 return movie_Scheama.findByIdAndDelete(id);
};
//update
const updateMovie = (id, body) => {
  return movie_Scheama.findByIdAndUpdate(id, { $set: body });
};

module.exports = { addMovie, getMovieBy, getMovie, deleteMovie, updateMovie };
