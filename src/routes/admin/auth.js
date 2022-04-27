const express = require('express');
const authController = require('../../controllers/authController');

const router = new express.Router();

// create auth
router.post('/login', authController.loginAdmin);
router.get('/refresh', authController.generateToken);



module.exports = router;
