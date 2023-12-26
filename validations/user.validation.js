const Joi = require("joi");


//user validation

const userValidation = {
    body: Joi.object().keys({
        f_Name: Joi.string().trim(),
        l_Name: Joi.string().trim(),
        age: Joi.number().integer().min(1),
        phone_no: Joi.string().trim(),
        address: Joi.object().keys({
            street: Joi.string().trim(),
            city: Joi.string().trim(),
            state: Joi.string().trim(),
            zipCode: Joi.string().trim(),
        }),
    }),
};

module.exports = {userValidation};
