const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getSpecificRoom = async (req, res) => {
    
        let id = req.params.id;
        if (!id){
            return request.badRequest(res, 'Please enter room id');
        }
        const room = await prisma.rooms.findUnique({
            where:{
                id: parseInt(id),
            },
        })
        if (!room || room.ownerId !== req.user.id){
            return request.notFoundRequest(res, "Room not found!");
        }
        await prisma.rooms.delete({where:{id:parseInt(id)}});
        return request.okRequest(res,"Success", room);
}
module.exports = getSpecificRoom;