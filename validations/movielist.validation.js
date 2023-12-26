const Joi = require("joi");

//movielist validation
const movielistvalidate = {
    body: Joi.object().keys({
        movie_title: Joi.string().trim().required(),
        cinema: Joi.string().trim().required(),
    })
};



module.exports = {movielistvalidate};
