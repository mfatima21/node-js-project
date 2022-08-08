const express=require('express');
const router=express.Router();                                          ///express. Router() function is used to create a new router object
const CastController = require("../controllers/cast.controller")

router.post('/', CastController.post);
router.get('/', CastController.get);

module.exports = router;
