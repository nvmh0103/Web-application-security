const express = require('express');
const auth = require('../middlewares/auth');
const reviewController = require('../controllers/reviewController');

const router = new express.Router();

// create auth
router.post('/', auth, reviewController.createReview);
router.get('/:roomId', reviewController.getReviews);
router.put('/:id', auth, reviewController.updateReview);
router.delete('/:id', auth, reviewController.deleteReview);


module.exports = router;