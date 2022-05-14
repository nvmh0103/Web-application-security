const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const prisma = new PrismaClient()

const getNotApprovedRoom = async (req, res) => {
    try {
        let page = req.query.page;
        if (!page){
            return request.badRequest(res, 'Please provide page');
        }
        const limit = req.query.limit || process.env.DEFAULT_PAGINATION;
        const room = await prisma.rooms.findMany({
            skip: (page-1) * limit,
            take: parseInt(limit),
            where: {
                approved: false,
            },
        });
        let totalNumber = await prisma.rooms.count({ where: { approved: false } });
        let {paginationData} = pagination(totalNumber, page, limit);
        return request.getManyRequest(res, "Success", room, paginationData);
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = getNotApprovedRoom;