const request = require('../../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const updateReview = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id){
            return request.badRequest(res, 'Please enter Review id');
        }
        const review = await prisma.reviews.findUnique({
            where:{
                id: parseInt(id),
            },
        })
        if (!review || review.userId !== req.user.id){
            return request.notFoundRequest(res, "Review not found!");
        }
        const updatedReview = await prisma.reviews.update({where:{id:parseInt(id)}, data:{...req.body}});
        // update room reviews
        const room = await prisma.rooms.findUnique({
            where:{
                id: review.roomId
            }
        });
        let currentRating = room.rating * room.totalReviews;
        currentRating -= review.rating;
        currentRating += req.body.rating;
        currentRating /= room.totalReviews;
        await prisma.rooms.update({
            where:{
                id: review.roomId
            },
            data:{
                rating: currentRating,
            }
        })
        return request.okRequest(res,"Success", updatedReview);
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = updateReview;