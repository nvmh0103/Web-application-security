const express = require('express');
const authController = require('../controllers/authController');

const router = new express.Router();

// create auth
router.post('/signup', authController.createUser);
router.post('/login', authController.login);



module.exports = router;
