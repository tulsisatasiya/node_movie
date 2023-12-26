const Joi = require("joi");

//cinema validation
const cinemaValidation = {
    body: Joi.object().keys({
        Cinema_name: Joi.string().required().trim(),
        location: Joi.object().keys({
            street: Joi.string().trim(),
            city: Joi.string().required().trim(),
            state: Joi.string().required().trim(),
            country: Joi.string().required().trim(),
        }),
        screens: Joi.array().items(Joi.object().keys({
            name: Joi.string().required().trim(),
            showtimes: Joi.array().items(Joi.string().trim()).required(),
            // showtimes: Joi.array().items(Joi.string().trim()).required(),
        })),
    }),
};

module.exports = {cinemaValidation};
