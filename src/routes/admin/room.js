const express = require('express');
const auth = require('../../middlewares/authForAdmin');
const roomController = require('../../controllers/roomController');

const router = new express.Router();

router.post('/approveRoom/:id', auth, roomController.approveRoom);
router.get('/notApproved', auth, roomController.getNotApprovedRoom);




module.exports = router;
