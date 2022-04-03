const {PrismaClient} = require('@prisma/client');
const request = require('../../utils/requests');
const brcypt = require('bcryptjs');
const jwt = require('../../utils/jwt');

const prisma = new PrismaClient()

const login = async (req, res) => {
    try {
        const user = await prisma.user.findFirst({
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
        console.log(user.email);
        const token = await jwt.sign({email:user.email});
        return request.createSuccessRequest(res, {token});

    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = login;