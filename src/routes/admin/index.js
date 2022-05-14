const express = require('express');
const auth = require('./auth');
const location = require('./location');
const room = require('./room');
const user = require('./user')

const router = new express.Router();

router.use('/auth', auth);
router.use('/locations', location);
router.use('/rooms', room);
router.use('./users', user);

module.exports = router;