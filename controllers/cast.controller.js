const Cast = require("../models/cast.model");
const { successResponse, failureResponse } = require("../services/response.service");

/**
 * @function post
 * @param req
 * @param res
 */
const post = async (req, res) => {
  const castData = req.body;
  try {
    const response = await Cast.create(castData)
    return successResponse(req, res, response, 201);
  } catch (err) {
    failureResponse(req, res, err.message, 500)
  }
  return res;
}

/**
 * @function get
 * @param req
 * @param res
 */
 const get = async (req, res) => {
  try {
    const response = await Cast.find({});
    return successResponse(req, res, response, 201);
  } catch (err) {
    failureResponse(req, res, err.message, 500)
  }
  return res;
}

module.exports = {
  post,
  get
}