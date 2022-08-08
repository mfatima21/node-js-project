const Joi = require("joi");

const exportObject = {
    createUser: {
        body: Joi.object({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            user_name: Joi.string().required(),
            password: Joi.string().required(),
            email: Joi.string().email().required(),
            role: Joi.string().valid('admin', 'user').required()
        })
    }
}

module.exports = exportObject