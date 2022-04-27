const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const prisma = new PrismaClient()

const createReview = async (req, res) => {
    try {
        // TODO: check if user has booked the room before.
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
        const review = await prisma.reviews.create({
            data: {
                ...req.body
            }
        })
        return request.createSuccessRequest(res,'Review created successfully', {review});
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = createReview;