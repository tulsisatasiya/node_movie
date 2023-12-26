const express = require("express");
const validate = require("../middlewares/validate");
const { movie_Controller } = require("../controllers");
const { movie_validation } = require("../validations");
const route = express.Router();

route.post("/add", validate(movie_validation.addmovievalid), movie_Controller.addMovie);
route.get("/get", movie_Controller.getMovie);
route.delete("/delete/:id", movie_Controller.deleteMovie);
route.put("/update/:id",validate(movie_validation.addmovievalid),movie_Controller.updatemovie);

module.exports = route;