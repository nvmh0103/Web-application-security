const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const pagination = require('../../utils/pagination')
const prisma = new PrismaClient();

const getRoom = async (req, res) => {
    try {
        const rooms = await prisma.rooms.findMany({
            where:{},
            include:{
                location: true,
                owner: true
            }
        })
        let {returnData, paginationData} = pagination(rooms, req.query.page, req.query.limit);
        return request.getManyRequest(res, "Success", returnData, paginationData);
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = getRoom;