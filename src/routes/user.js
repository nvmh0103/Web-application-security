const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = new express.Router();

// create user
router.get('/', auth, userController.getUser);


module.exports = router;
