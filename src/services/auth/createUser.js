const {PrismaClient} = require('@prisma/client');
const request = require('../../utils/requests');
const brcypt = require('bcryptjs');


const prisma = new PrismaClient()

const createUser = async (req, res) => {
    try {
        req.body.password = await brcypt.hash(req.body.password, 10);
        const user = await prisma.users.create({
            data: {
                ...req.body
            }
        })
        return request.createSuccessRequest(res,'User created successfully', {user});
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = createUser;