const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const isLogged = async (req, res) => {
   if (req.session.jwtToken == null){
       return request.okRequest(res, "Not logged in!");
   }
   return request.okRequest(res,"Logged in!")
}
module.exports = isLogged;