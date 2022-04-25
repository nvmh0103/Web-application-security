const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const pagination = require('../../utils/pagination');
const prisma = new PrismaClient();

const getLocation = async (req, res) => {
    try{
        let page = req.query.page;
        if (!page){
            return request.badRequest(res, 'Please provide page');
        }
        const limit = req.query.limit || process.env.DEFAULT_PAGINATION;
        const locations = await prisma.locations.findMany({
            skip: (page-1) * limit,
            take: parseInt(limit),
            where:{},
        })
        let totalNumber = await prisma.locations.count();
        let {paginationData} = pagination(totalNumber, page, limit);
        return request.getManyRequest(res, "Success", locations, paginationData);
    } catch (err){
        return request.InteralServerError(res, err);
    }
}
module.exports = getLocation;