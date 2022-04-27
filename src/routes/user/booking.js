const express = require('express');
const auth = require('../../middlewares/authForHost');
const mediaController = require('../../controllers/mediaController');

const router = new express.Router();

// create auth
router.post('/', auth, mediaController.createMedia);
router.get('/', mediaController.getMedias);
router.delete('/:id', auth, mediaController.deleteMedia);


module.exports = router;