const express = require('express');
const userController = require('../controllers/userController');

const router = new express.Router();

// create user
router.post('/', userController.createUser);

router.get('/', userController.getUser);


module.exports = router;
