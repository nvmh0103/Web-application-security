const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const pagination = require('../../utils/pagination');
const prisma = new PrismaClient();

const getRoom = async (req, res) => {
    try{
        let page = req.query.page;
        if (!page){
            return request.badRequest(res, 'Please provide page');
        }
        const limit = req.query.limit || process.env.DEFAULT_PAGINATION;
        const rooms = await prisma.rooms.findMany({
            skip: (page-1) * limit,
            take: parseInt(limit),
            where:{},
            include:{
                location: true,
            }
        })
        let totalNumber = await prisma.rooms.count();
        let {paginationData} = pagination(totalNumber, page, limit);
        return request.getManyRequest(res, "Success", rooms, paginationData);
    } catch (err){
        return request.InteralServerError(res, err);
    }
}
module.exports = getRoom;