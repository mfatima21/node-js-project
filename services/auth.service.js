const User = require("../models/user.model")
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const express = require("express");
const bcrypt = require('bcrypt');
const { successResponse, failureResponse } = require("./response.service");
const permissions = require("../permissions.json");
router = express.Router();
dotenv.config();

const login = async (req, res) => {
  const userData = req.body;
  try {
    const user            = await User.find({ email: userData.email });
    const passwordMatched = await bcrypt.compare(userData.password, user[0].password)
    
    if (!passwordMatched) {
      return failureResponse(req, res, {message: "Wrong password", error: true}, 401) 
    }
    if(user.length > 0) {
      let jwtSecretKey = process.env.JWT_SECRET_KEY;
      let data = {
        time: Date(),
        userId: user[0]["_id"],
        role: user[0]["role"]
      }
      const token = jwt.sign(data, jwtSecretKey);
      return successResponse(req, res, {message: "Logged in", accessToken: token}, 200);
    }
    else {
      return failureResponse(req, res, {message: "Invalid username or password", error: true}, 401) 
    }
  } catch (err) {
    res.json({ message: err});
  }
}

const validateToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return failureResponse(req, res, {message: "Please provide jwt token", error: true}, 401) 
  }
  try {
    let token = req.headers.authorization;
    token = token.split(" ");
    const verified = jwt.verify(token[1], process.env.JWT_SECRET_KEY);
    if(verified){
      req["user"] = verified;
      next();
    }else{
      return successResponse(req, res, {message: "invalid jwt token", accessToken: token}, 401);
    }
  } catch (error) {
    return failureResponse(req, res, {message: error.message, error: true}, 500) 
  }
}

const authorization = (req, res, next) => {
  const method  = req.method;
  const role    = req.user.role;
  const allowed = permissions[role].includes(method)
  if (allowed) {
    next()
  } else {
    return failureResponse(req, res, {message: "Your role doesnt have the specified permissions", error: true}, 500) 
  }
};

module.exports = {
  login,
  validateToken,
  authorization
}