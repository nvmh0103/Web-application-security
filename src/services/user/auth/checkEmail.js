const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const prisma = new PrismaClient()

const checkEmail = async (req, res) => {
    try {
        const numberOfUser = await prisma.users.count({where: {email: req.query.email}});
        if (numberOfUser > 0) {
            return request.badRequest(res, 'User exists');
        }

        return request.createSuccessRequest(res,'User not exists');
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = checkEmail;