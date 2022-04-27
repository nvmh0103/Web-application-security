const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const prisma = new PrismaClient()

const createLocation = async (req, res) => {
    try {
        const location = await prisma.locations.create({
            data: {
                ...req.body
            }
        })
        return request.createSuccessRequest(res,'Location created successfully', {location});
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = createLocation;