const {PrismaClient} = require('@prisma/client');
const request = require('../../utils/requests')

const prisma = new PrismaClient()

const createUser = async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                ...req.body
            }
        })
        return request.createSuccessRequest(res,'User created successfully');
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = createUser;