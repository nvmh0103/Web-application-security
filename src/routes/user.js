const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const generateToken = require('../middlewares/generateToken');

const router = new express.Router();

// create user
router.get('/', generateToken, auth, userController.getUser);


module.exports = router;
