const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getSpecificRoom = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id){
            return request.badRequest(res, 'Please enter room id');
        }
        const room = await prisma.rooms.findUnique({
            where:{
                id:parseInt(id)
            },
        })
        if (!room){
            return request.notFoundRequest(res, "Room not found!");
        }
        return request.okRequest(res,"Succes", room);
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = getSpecificRoom;