const request = require('../../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const pagination = require('../../../utils/pagination');
const prisma = new PrismaClient();

const getBooking = async (req, res) => {
    try{
        let page = req.query.page;
        if (!page){
            return request.badRequest(res, 'Please provide page');
        }
        const limit = req.query.limit || process.env.DEFAULT_PAGINATION;
        const Bookings = await prisma.Bookings.findMany({
            skip: (page-1) * limit,
            take: parseInt(limit),
            where:{
                userId: parseInt(req.user.id),
            },
        })
        let totalNumber = await prisma.bookings.count({where:{userId: parseInt(req.user.id)}});
        let {paginationData} = pagination(totalNumber, page, limit);
        return request.getManyRequest(res, "Success", Bookings, paginationData);
    } catch (err){
        return request.InteralServerError(res, err);
    }
}
module.exports = getBooking;