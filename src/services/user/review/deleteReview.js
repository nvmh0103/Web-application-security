const request = require('../../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const deleteReview = async (req, res) => {
        let id = req.params.id;
        if (!id){
            return request.badRequest(res, 'Please enter review id');
        }
        const review = await prisma.reviews.findUnique({
            where:{
                id: parseInt(id),
            },
        })
        if (!review || review.userId !== req.user.id){
            return request.notFoundRequest(res, "Review not found!");
        }
        const deletedReview = await prisma.reviews.delete({where:{id:parseInt(id)}});
        // update room rating
        const room = await prisma.rooms.findUnique({
            where:{
                id: review.roomId
            }
        });
        let currentRating = room.rating * room.totalReviews;
        currentRating -= review.rating;
        currentRating /= (room.totalReviews - 1);
        await prisma.rooms.update({
            where:{
                id: review.roomId
            },
            data:{
                rating: currentRating,
                totalReviews: room.totalReviews - 1
            }
        })
        return request.okRequest(res,"Success", deletedReview);
}
module.exports = deleteReview;