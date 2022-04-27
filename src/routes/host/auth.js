const express = require('express');
const authController = require('../../controllers/authController');

const router = new express.Router();

// create auth
router.post('/signup', authController.createHost);
router.post('/login', authController.loginHost);
router.get('/refresh', authController.generateToken);



module.exports = router;
