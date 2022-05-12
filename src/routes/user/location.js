const express = require('express');
const auth = require('../../middlewares/auth');
const locationController = require('../../controllers/locationController');

const router = new express.Router();

router.get('/searchLocation', locationController.searchLocation);

module.exports = router;