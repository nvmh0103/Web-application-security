const express = require('express');
const auth = require('./auth');
const booking = require('./booking');
const profile = require('./profile');
const review = require('./review');
const room = require('./room');

const router = new express.Router();

router.use('/auth', auth);
router.use('/bookings', booking);
router.use('/profile', profile);
router.use('/reviews', review);
router.use('/rooms', room);

module.exports = router;