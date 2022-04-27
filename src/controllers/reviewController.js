const {user} = require('../services');

class reviewController {
    createReview(req, res){
        user.review.createReview(req, res);
    }
    getReviews(req, res){
        user.review.getReview(req, res);
    }
    updateReview(req, res){
        user.review.updateReview(req, res);
    }
    deleteReview(req, res){
        user.review.deleteReview(req, res);
    }
}
module.exports = new reviewController();