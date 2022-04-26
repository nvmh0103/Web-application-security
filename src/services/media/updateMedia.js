const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const updateMedia = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id){
            return request.badRequest(res, 'Please enter Media id');
        }
        const media = await prisma.medias.findUnique({
            where:{
                id: parseInt(id),
            },
            include:{
                room: true,
            }
        })
        if (!media || media.room.ownerId !== req.user.id){
            return request.badRequest(res, 'Media not found');
        }
        const updatedMedia = await prisma.medias.update({where:{id: parseInt(id)}, data: {...req.body}});
        return request.okRequest(res,"Success", updatedMedia);
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = updateMedia;