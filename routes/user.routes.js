const express = require('express');
const router = express.Router();
const { validate } = require("express-validation");
const UserController = require("../controllers/user.controller")
const userValidator = require("../validators/user.validator")

router.post('/',validate(userValidator.createUser), UserController.post);
router.get('/', UserController.get);

module.exports = router;
