const request = require('../../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const pagination = require('../../../utils/pagination');
const handleFilterQuery = require('../../../utils/handleFilterQuery');
const prisma = new PrismaClient();

const getRoom = async (req, res) => {
    
        let page = req.query.page;
        if (!page){
            return request.badRequest(res, 'Please provide page');
        }
        const {filter, sort} = await handleFilterQuery(req);
        console.log(filter);
        const limit = req.query.limit || process.env.DEFAULT_PAGINATION;
        const rooms = await prisma.rooms.findMany({
            skip: (page-1) * limit,
            take: parseInt(limit),
            where: filter,
            include:{
                location: true,
            }
        })
        let totalNumber = await prisma.rooms.count({where: filter});
        let {paginationData} = pagination(totalNumber, page, limit);
        return request.getManyRequest(res, "Success", rooms, paginationData);
    
}
module.exports = getRoom;