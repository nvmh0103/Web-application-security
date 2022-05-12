const request = require('../../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const searchLocation = async (req, res) => {
    
        const limit = 5
        const locations = await prisma.locations.findMany({
            take: parseInt(limit),
            where:{
                displayName:{
                    search: req.query.search,
                }
            },
        })
        return request.okRequest(res, "Success",{locations});
    
}
module.exports = searchLocation;