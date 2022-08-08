const Joi = require("joi");

const exportObject = {
    createMovies: {
        body: Joi.object({
            title: Joi.string().required(),
            cast: Joi.array().required(),
            genre: Joi.string().required()
        })
    }
}
module.exports = exportObject