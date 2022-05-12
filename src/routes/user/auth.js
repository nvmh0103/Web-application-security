const express = require('express');
const authController = require('../../controllers/authController');

const router = new express.Router();

// create auth
router.post('/signup', authController.createUser);
router.post('/login', authController.loginUser);
router.get('/refresh', authController.generateToken);
router.get('/checkEmail', authController.checkEmail);
router.get('/isLoggedIn', authController.isLoggedIn);


module.exports = router;
