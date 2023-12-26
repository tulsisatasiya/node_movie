const express = require("express");
const validate = require("../middlewares/validate");
// const { ticket_Controller } = require("../controllers");
const {ticket_validation } = require("../validations");
const { ticket_Controller } = require("../controllers");
const route = express.Router();

route.post("/add", validate(ticket_validation.ticketValidation), ticket_Controller.addTicket);
route.get("/get", ticket_Controller.getTicket);
route.delete("/delete/:id", ticket_Controller.deleteTicket);
route.put("/update/:id",validate(ticket_validation.ticketValidation),ticket_Controller.updateticket);

module.exports = route;