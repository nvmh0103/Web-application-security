const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const prisma = new PrismaClient()

const createBooking = async (req, res) => {
    try {
        req.body.room={
            connect:{
                id: req.body.roomId
            }
        }
        delete req.body.roomId;
        req.body.user={
            connect:{
                id: req.user.id
            }
        }
        const booking = await prisma.bookings.create({
            data: {
                ...req.body
            }
        })
        return request.createSuccessRequest(res,'Booking created successfully', {booking});
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = createBooking;