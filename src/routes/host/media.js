const express = require('express');
const auth = require('../../middlewares/authForHost');
const mediaController = require('../../controllers/mediaController');

const router = new express.Router();

// create auth
router.get("/presign", auth, mediaController.genPresignURL);
router.post('/', auth, mediaController.createMedia);
router.get('/:roomId', mediaController.getMedias);
router.put('/:id', auth, mediaController.updateMedia);
router.delete('/:id', auth, mediaController.deleteMedia);



module.exports = router;