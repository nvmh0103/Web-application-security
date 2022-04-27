const express = require('express');
const auth = require('./auth');
const media = require('./media');
const room = require('./room');

const router = new express.Router();

router.use('/auth', auth);
router.use('/medias', media);
router.use('/rooms', room);

module.exports = router;