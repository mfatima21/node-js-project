const Joi = require("joi");

const exportObject = {
    login: {
        body: Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    }
}
module.exports  = exportObject