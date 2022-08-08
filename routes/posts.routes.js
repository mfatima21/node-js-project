const express = require('express');
const router = express.Router();
const { validate } = require("express-validation");
const MovieController = require("../controllers/movie.controller")
const moviesValidator = require("../validators/movies.validator")

router.post('/',validate(moviesValidator.createMovies) , MovieController.post);
router.get('/', MovieController.get);

module.exports = router;
