const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const pagination = require('../../utils/pagination');
const prisma = new PrismaClient();

const getReview = async (req, res) => {
    try{
        const {roomId} = req.params;
        if (!roomId){
            return request.BadRequest(res, 'Please enter room id');
        }
        let page = req.query.page;
        if (!page){
            return request.badRequest(res, 'Please provide page');
        }
        const limit = req.query.limit || process.env.DEFAULT_PAGINATION;
        const reviews = await prisma.reviews.findMany({
            skip: (page-1) * limit,
            take: parseInt(limit),
            where:{
                roomId: parseInt(roomId)
            },
            include:{
                user: true,
            }
        })
        let totalNumber = await prisma.reviews.count({
            where:{
                roomId: parseInt(roomId)
            }
        });
        let {paginationData} = pagination(totalNumber, page, limit);
        return request.getManyRequest(res, "Success", reviews, paginationData);
    } catch (err){
        return request.InteralServerError(res, err);
    }
}
module.exports = getReview;