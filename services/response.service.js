const  { logger } = require("../config/logger.config");

const successResponse = (req, res, data, statusCode = 200) => {
    resp = data.accessToken ? data.message : data;
    logger.info({request: {url: req.originalUrl, body: req.body, params: req.query, method: req.method }, resp, statusCode: statusCode})

    return res.status(statusCode).send(data);
};

const failureResponse = (req, res, error, statusCode=500) => {
    logger.error({request: {url: req.originalUrl, body: req.body, params: req.query, method: req.method }, response: error, statusCode: statusCode})
    return res.status(statusCode).send(error);
};

module.exports = {
    successResponse,
    failureResponse
}