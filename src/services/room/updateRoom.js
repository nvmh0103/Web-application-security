const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const updateRoom = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id){
            return request.badRequest(res, 'Please enter room id');
        }
        const room = await prisma.rooms.findUnique({
            where:{
                id: parseInt(id),
            },
        })
        if (!room || room.ownerId !== req.user.id ){
            return request.notFoundRequest(res, "Room not found!");
        }
        const updatedRoom = await prisma.rooms.update({where:{id:parseInt(id)}, data:{...req.body}});
        return request.okRequest(res,"Succes", updatedRoom);
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = updateRoom;