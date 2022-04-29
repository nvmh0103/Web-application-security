const express = require('express');
const auth = require('../../middlewares/auth');
const bookingController = require('../../controllers/bookingController');

const router = new express.Router();

// create auth
router.post('/', auth, bookingController.createBooking);
router.get('/', auth, bookingController.getBookings);
router.delete('/:id', auth, bookingController.deleteBooking);


module.exports = router;