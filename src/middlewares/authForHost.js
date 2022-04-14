const jwt = require('../utils/jwt')
const request = require('../utils/requests')
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const authForHost = async (req, res, next) => {
    if (req.session.jwtToken == null){
        return request.NotAuthorizedError(res);
    }
    try {
        const {email} = jwt.verifyToken(req.session.jwtToken);
        req.email = email;
        const user = await prisma.users.findUnique({where: {email}});
        if (user.role != 'Host'){
            return request.NotAuthorizedError(res);
        }
        req.user = user;
        next();  
    } catch (err){
        return request.badRequest(res,"Access token expires or invalid!");
    }
}

module.exports = authForHost;