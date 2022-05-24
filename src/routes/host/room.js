const express = require('express');
const auth = require('../../middlewares/authForHost');
const roomController = require('../../controllers/roomController');
const { room } = require('../../services');

const router = new express.Router();


router.post('/', auth, roomController.createRoom);
router.get('/',auth, roomController.getHostRoom);
router.get('/:id', roomController.getSpecificRoom);
router.put('/:id', auth, roomController.updateRoom);
router.delete('/:id', auth, roomController.deleteRoom);



module.exports = router;