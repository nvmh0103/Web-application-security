const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const deleteBooking = async (req, res) => {
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
        if (booking.paid == true){
            return request.badRequest(res, 'You can not delete a paid booking');
        }
        const deletedBooking = await prisma.bookings.delete({where:{id: parseInt(id)}});
        return request.okRequest(res,"Success", deletedBooking);
}
module.exports = deleteBooking;