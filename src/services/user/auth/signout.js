const {PrismaClient} = require('@prisma/client');
const request = require('../../../utils/requests');


const signout = async (req, res) => {
   if (req.session.jwtToken == null){
       return request.okRequest(res, "Not logged in!");
   }
   req.session.jwtToken = null;
   req.session.jwtRefresh = null;
   return request.okRequest(res,"Logged out!");
}
module.exports = signout;