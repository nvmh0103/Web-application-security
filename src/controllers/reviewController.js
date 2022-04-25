const {review} = require('../services');

class reviewController {
    createReview(req, res){
        review.createReview(req, res);
    }
    getReviews(req, res){
        review.getReview(req, res);
    }
    updateReview(req, res){
        review.updateReview(req, res);
    }
    deleteReview(req, res){
        review.deleteReview(req, res);
    }
}
module.exports = new reviewController();