const express = require("express");
const validate = require("../middlewares/validate");
const { cinema_validation } = require("../validations");
const { cinema_Controller } = require("../controllers");

const route = express.Router();

route.post("/add", validate(cinema_validation.cinemaValidation), cinema_Controller.addcinema);
route.get("/get", cinema_Controller.getcinema);
route.delete("/delete/:id", cinema_Controller.deletecinema);
route.put("/update/:id",validate(cinema_validation.cinemaValidation),cinema_Controller.updatecinema);

module.exports = route;