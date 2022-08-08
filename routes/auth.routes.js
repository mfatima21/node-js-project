const express=require('express');
const router=express.Router();                                          ///express. Router() function is used to create a new router object
const auth = require("../services/auth.service");
const { validate } = require("express-validation");
const authValidator = require("../validators/auth.validator")

router.get('/',validate(authValidator.login) , auth.login);

module.exports = router;
