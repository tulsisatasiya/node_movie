const { movie_Services } = require("../services");

const addMovie = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const MovieExist = await movie_Services.getMovieBy(body.title);
    
    if (MovieExist) {
      throw new Error("Movie already exist");
    }

    const Movie = await movie_Services.addMovie(body);

    if (!Movie) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "Movie Created success",
      data: Movie,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getMovie = async (req, res) => {
    try {
         const getMovie = await movie_Services.getMovie(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Movie list Get.....",
              data: {
                getMovie,

              }
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}


const deleteMovie = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const Movie = await movie_Services.deleteMovie (id);
    if (!Movie) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "movie delete success",
      data: Movie,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updatemovie = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    const movieExist = await movie_Services.getMovieBy(body.title);

    if (movieExist) {
      throw new Error("movie already existed");
    }

    const movie = await movie_Services.updateMovie(id, body);

    res.status(200).json({
      message: "movie updated success",
      data: movie,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { addMovie, getMovie, deleteMovie, updatemovie };
