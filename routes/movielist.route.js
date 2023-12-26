const express = require("express");
// const validate = require("../middlewares/validate");
const { movielist_Controller } = require("../controllers");
// const { movie_validation } = require("../validations");
const route = express.Router();

route.post("/add", 
// validate(movie_validation.addmovievalid),
movielist_Controller.addMovielist);
route.get("/get", movielist_Controller.getMovielist);
route.delete("/delete/:id", movielist_Controller.deleteMovielist);
route.put("/update/:id", movielist_Controller.updateMovielist);


module.exports = route;