const request = require('../../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const updateLocation = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id){
            return request.badRequest(res, 'Please enter location id');
        }
        const Location = await prisma.locations.update({
            where:{
                id: parseInt(id),
            },
            data:{
                ...req.body
            }
        })
        return request.okRequest(res,"Success", Location);
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = updateLocation;