const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const getRoom = async (req, res) => {
    try {
        const room = await prisma.rooms.findMany({
            where:{},
            include:{
                location: true,
                owner: true
            }
        })
        return request.okRequest(res, "Success", room);
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = getRoom;