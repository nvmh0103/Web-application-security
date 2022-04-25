const request = require('../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const deleteLocation = async (req, res) => {
    
        let id = req.params.id;
        if (!id){
            return request.badRequest(res, 'Please enter Location id');
        }
        const Location = await prisma.locations.delete({
            where:{
                id: parseInt(id),
            },
        })
        return request.okRequest(res,"Success", Location);
}
module.exports = deleteLocation;