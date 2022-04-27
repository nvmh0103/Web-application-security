const request = require('../../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const updateBooking = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id){
            return request.badRequest(res, 'Please enter Booking id');
        }
        const booking = await prisma.bookings.findUnique({
            where:{
                id: parseInt(id),
            },
        })
        if (!booking || booking.userId !== req.user.id){
            return request.badRequest(res, 'Booking not found');
        }
        const updatedBooking = await prisma.bookings.update({where:{id: parseInt(id)}, data: {...req.body}});
        return request.okRequest(res,"Success", updatedBooking);
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = updateBooking;