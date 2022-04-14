const express = require('express');
const auth = require('../middlewares/authForHost');
const roomController = require('../controllers/roomController');
const { room } = require('../services');

const router = new express.Router();

// create auth
router.post('/', auth, roomController.createRoom);
router.get('/', roomController.getRoom);


module.exports = router;