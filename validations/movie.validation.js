const Joi = require("joi");

//movie validation
const addmovievalid = {
  body: Joi.object().keys({
    title: Joi.string().trim().required(),
    releaseDate: Joi.string().isoDate(), 
    director: Joi.string().trim(),
    actors: Joi.array().items(Joi.string().trim()),
    duration: Joi.number().integer().min(1),
    rating: Joi.number().min(1).max(5),
  }),
};

module.exports = {addmovievalid};
