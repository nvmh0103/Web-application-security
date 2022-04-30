const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const prisma = new PrismaClient()

const createReview = async (req, res) => {
    try {
        // TODO: check if user has booked the room before.
        const {roomId} = req.body;
        const validation = await prisma.bookings.count({
            where:{
                roomId,
                userId: parseInt(req.user.id),
                endAt:{
                    lte: new Date()
                }
            }
        })
        if (validation == 0){
            return request.badRequest(res, "Cant create reviews because you have not booked the room");
        }
        //
        req.body.room= {
            connect: {
                id: req.body.roomId
            }
        }
        delete req.body.roomId;
        req.body.user={
            connect:{
                id: req.user.id
            }
        }
        // create review
        const review = await prisma.reviews.create({
            data: {
                ...req.body
            }
        })
        // update room rating
        const room = await prisma.rooms.findUnique({
            where:{
                id: roomId
            }
        });
        // TODO: update rating
        let currentRating = room.rating * room.totalReviews;
        currentRating += review.rating;
        currentRating /= (room.totalReviews + 1);
        await prisma.rooms.update({
            where:{
                id: roomId
            },
            data:{
                rating: currentRating,
                totalReviews: room.totalReviews + 1
            }
        })
        return request.createSuccessRequest(res,'Review created successfully', {review});
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = createReview;