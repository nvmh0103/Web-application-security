const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const prisma = new PrismaClient()

const approveRoom = async (req, res) => {
    try {
        console.log(req.params.id);
        const room = await prisma.rooms.update({
            where: {
                id: parseInt(req.params.id)
            },
            data:{
                approved: true
            }
        });
        if (!room){
            return request.notFound(res, 'Room not found');
        }
        return request.createSuccessRequest(res,`Room number ${req.params.id} approved!`, {room});
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = approveRoom;