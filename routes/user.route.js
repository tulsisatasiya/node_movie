const express = require("express");
const validate = require("../middlewares/validate");
const { user_validation } = require("../validations");
const { user_Controller } = require("../controllers");
const route = express.Router();

route.post("/add", validate(user_validation.userValidation), user_Controller.addUser);
route.get("/get", user_Controller.getUser);
route.delete("/delete/:id", user_Controller.deleteUser);
route.put("/update/:id",validate(user_validation.userValidation),user_Controller.updateUser);

module.exports = route;