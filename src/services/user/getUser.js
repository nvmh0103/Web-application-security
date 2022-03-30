const {PrismaClient} = require('@prisma/client');
const request = require('../../utils/requests')

const prisma = new PrismaClient()

const getUser = async (req, res) => {
    return request.okRequest(res, "OK");
}
module.exports = getUser;