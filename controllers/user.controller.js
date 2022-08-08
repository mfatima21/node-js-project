const bcrypt = require('bcrypt');
const User = require("../models/user.model")
const { successResponse, failureResponse } = require("../services/response.service");

const saltRounds = 10;

/**
 * @function post
 * @param req
 * @param res
 */
const post = async (req, res) => {
    const userData = req.body;
  try {
    userData.password = await bcrypt.hash(userData.password, saltRounds)
    let response = await User.create(userData);
    delete response.password;
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
    const response = await User.find({});
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