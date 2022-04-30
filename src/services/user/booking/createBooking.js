const {PrismaClient} = require('@prisma/client');
const { badRequest } = require('../../../utils/requests');
const request = require('../../../utils/requests');
const publisher = require('../../../events/publish');


const prisma = new PrismaClient()

const createBooking = async (req, res) => {
        req.body.room={
            connect:{
                id: req.body.roomId
            }
        }
   
        req.body.user={
            connect:{
                id: req.user.id
            }
        }
        let startDate = new Date(req.body.startAt);
        let endDate = new Date(req.body.endAt);
        if (startDate < new Date() || startDate > endDate || startDate === endDate){
            return request.badRequest(res, 'Invalid time!');
        }
        let validation = await prisma.rooms.count({where:{
            id: req.body.roomId,
            bookings: {
                some:{
                    startAt: {
                        gte: new Date(req.body.startAt)
                    },
                    endAt: {
                        lte: new Date(req.body.endAt)
                    }
                }
            }
        }})
        if (validation !== 0){
            return request.badRequest(res, 'Room has been booked!');
        }
        delete req.body.roomId;
        const booking = await prisma.bookings.create({
            data: {
                ...req.body
            }
        })
        publisher("booking_exchange", "booking_events", "booking_rkey", booking.id.toString(), 1000*20);
        return request.createSuccessRequest(res,'Booking created successfully', {booking});
  
}
module.exports = createBooking;