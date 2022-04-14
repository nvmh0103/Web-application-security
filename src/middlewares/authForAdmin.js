const jwt = require('../utils/jwt')
const request = require('../utils/requests')
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const auth = (req, res, next) => {
    if (req.session.jwtToken == null){
        return request.NotAuthorizedError(res);
    }
    try {
        const {email} = jwt.verifyToken(req.session.jwtToken);
        req.email = email;
        const user = prisma.users.findUnique({where: {email}});
        if (user.role != 'Admin'){
            return request.NotAuthorizedError(res);
        }
        next();  
    } catch (err){
        return request.badRequest(res,"Access token expires or invalid!");
    }
}

module.exports = auth;