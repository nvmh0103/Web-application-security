const jwt = require('../utils/jwt')
const request = require('../utils/requests')
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const authForAdmin = async(req, res, next) => {
    try {
        const receiveToken= req.header('Authorization').replace('Bearer', '').trim();
        const {email} = jwt.verifyToken(receiveToken);
        const user = await prisma.users.findUnique({where: {email}});
        if (user.role != 'Admin'){
            return request.NotAuthorizedError(res);
        }
        req.user = user;
        next();  
    } catch (err){
        return request.badRequest(res,"Access token expires or invalid!");
    }
}

module.exports = authForAdmin;