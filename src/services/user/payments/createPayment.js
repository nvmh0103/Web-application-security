const {PrismaClient} = require('@prisma/client');
const { badRequest } = require('../../../utils/requests');
const request = require('../../../utils/requests');
const stripe = require('../../../utils/stripe');


const prisma = new PrismaClient()

const createPayment = async (req, res) => {
    try {
        req.body.user={
            connect:{
                id: req.user.id
            }
        }
        req.body.booking={
            connect: {
                id: req.body.bookingId
            }
        }
        // validating the request
        let validation = await prisma.bookings.find({where:{
            id: req.body.bookingId,
        }})
        if (!validation){
            return badRequest(res, 'Booking not found');
        }
        if (validation.paid == true){
            return badRequest(res, 'Room already paid');
        }
        // create payments if charges successfully
        const payment = await prisma.payments.create({
            data: {
                ...req.body
            }
        })
        // update bookings paid to be true
        const bookings = await prisma.bookings.update({
            where:{
                id: req.body.bookingId
            },
            data: {
                paid: true,
            }
        })
        delete req.body.bookingId;
        return request.createSuccessRequest(res,'Payment created successfully', {payment});
    } catch (err){
        return request.InteralServerError(res, err);
    }
   
}
module.exports = createPayment;