const Movie = require("../models/movie.model")
const { successResponse, failureResponse } = require("../services/response.service");

/**
 * @function post
 * @param req
 * @param res
 */
const post = async (req, res) => {
  const movieData = req.body;
  try {
    const data = await Movie.create(movieData)
    return successResponse(req, res, data, 201);
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
  let query_filter = [];
  let query_params = req.query;
  try {
    const p      = query_params.p ? parseInt(query_params.p.toString(), 10) : 1;
    const limit  = query_params.limit ? parseInt(query_params.limit.toString(), 10) : 10;
    const offset = limit * (p - 1);
    query_filter = query_params.title ? query_filter.concat({ title: { "$regex": req.query.title }}) : query_filter;
    query_filter = query_params.cast ? query_filter.concat({ cast: { "$in": req.query.cast }}) : query_filter;
    query_filter = query_params.genre ? query_filter.concat({ title: { $regex: req.query.genre }}) : query_filter;
    const query  =  query_filter.length ? {"$or": query_filter} : {}
    let data     = await Movie.find(query).limit(+limit).skip(+offset);
    return successResponse(req, res, data, 200);
  } catch (err) {
    failureResponse(req, res, err.message, 500)
  }
}

module.exports = {
  post,
  get
}