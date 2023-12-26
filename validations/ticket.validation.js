const Joi = require("joi");


// ticket validation
const ticketValidation = {
  body: Joi.object().keys({
    seatNumber: Joi.string().trim().required(),
    bookingDate: Joi.date().default(new Date()),
    user: Joi.string().trim().required(),  
    movie_list: Joi.string().trim().required(),  
    cinema_name: Joi.string().trim().required(),  
  })
};

module.exports = { ticketValidation };
