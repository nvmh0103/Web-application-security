const request = require('../../../utils/requests');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const getUser = async (req, res) => {
    try {
        const user = await prisma.users.findUnique({
            where:{
                email: req.email
            }
        })
        return request.okRequest(res, "Success", user);
    } catch (err){
        console.log("Something wrong!");
    }
}
module.exports = getUser;