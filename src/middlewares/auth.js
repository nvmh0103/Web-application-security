const jwt = require('../utils/jwt')
const request = require('../utils/requests')
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const auth = async (req, res, next) => {
    if (req.session.jwtToken == null){
        return request.NotAuthorizedError(res);
    }
    try {
        const {email} = jwt.verifyToken(req.session.jwtToken);
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })
        req.user = user;

        next();
    } catch (err){
        return request.badRequest(res,"Access token expires or invalid!");
    }
}

module.exports = auth;