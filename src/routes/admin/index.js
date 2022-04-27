const express = require('express');
const auth = require('./auth');
const location = require('./location');

const router = new express.Router();

router.use('/auth', auth);
router.use('/locations', location);

module.exports = router;