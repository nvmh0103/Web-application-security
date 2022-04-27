const express = require('express');
const auth = require('../../middlewares/authForAdmin');
const locationController = require('../../controllers/locationController');

const router = new express.Router();

// create auth
router.post('/', auth, locationController.createLocation);
router.get('/', locationController.getLocations);
router.put('/:id', auth, locationController.updateLocation);
router.delete('/:id', auth, locationController.deleteLocation);


module.exports = router;