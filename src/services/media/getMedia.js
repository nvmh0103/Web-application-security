const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const pagination = require('../../utils/pagination');
const prisma = new PrismaClient();

const getMedia = async (req, res) => {
    try{
        let {roomId} = req.params;
        let page = req.query.page;
        if (!page){
            return request.badRequest(res, 'Please provide page');
        }
        const limit = req.query.limit || process.env.DEFAULT_PAGINATION;
        const medias = await prisma.medias.findMany({
            skip: (page-1) * limit,
            take: parseInt(limit),
            where:{
                roomId: parseInt(roomId),
            },
        })
        let totalNumber = await prisma.medias.count({where:{roomId: parseInt(roomId)}});
        let {paginationData} = pagination(totalNumber, page, limit);
        return request.getManyRequest(res, "Success", medias, paginationData);
    } catch (err){
        return request.InteralServerError(res, err);
    }
}
module.exports = getMedia;