const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const prisma = new PrismaClient()

const createRoom = async (req, res) => {
    try {
        req.body.owner = {
            connect: {
                id: req.user.id
            }
        }
        req.body.location = {
            connect: {
                id: req.body.location
            }
        }
        const room = await prisma.rooms.create({
            data: {
                ...req.body
            }
        })
        return request.createSuccessRequest(res,'Room created successfully', {room});
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = createRoom;