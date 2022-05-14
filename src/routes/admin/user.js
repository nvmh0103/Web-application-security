const express = require('express');
const auth = require('../../middlewares/authForAdmin');
const userController = require('../../controllers/userController');

const router = new express.Router();


router.get('/', auth, userController.getAllUser);



module.exports = router;