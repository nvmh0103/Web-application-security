const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const prisma = new PrismaClient()

const createMedia = async (req, res) => {
    try {
        req.body.room={
            connect:{
                id: req.body.roomId
            }
        }
        delete req.body.roomId;
        const media = await prisma.medias.create({
            data: {
                ...req.body
            }
        })
        return request.createSuccessRequest(res,'Media created successfully', {media});
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = createMedia;