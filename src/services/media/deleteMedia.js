const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const deleteMedia = async (req, res) => {
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
        const deletedMedia = await prisma.medias.delete({where:{id: parseInt(id)}});
        return request.okRequest(res,"Success", deletedMedia);
}
module.exports = deleteMedia;