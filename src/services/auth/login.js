const {PrismaClient} = require('@prisma/client');
const request = require('../../utils/requests');
const brcypt = require('bcryptjs');
const jwt = require('../../utils/jwt');

const prisma = new PrismaClient()

const login = async (req, res) => {
    try {
        const user = await prisma.users.findFirst({
            where: {
                email: req.body.email
            }
        })
        if (!user) {
            return request.badRequest(res, 'User or password is invalid!');
        }
        const isMatch = await brcypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return request.badRequest(res, 'User or password is invalid!');
        }
        const token = jwt.signToken({email:user.email});
        const refreshToken = jwt.signRefreshToken({email: user.email}); 
        req.session = {
            jwtToken: token,
            jwtRefresh: refreshToken,
        }
        return request.createSuccessRequest(res, "Login successfully");

    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = login;