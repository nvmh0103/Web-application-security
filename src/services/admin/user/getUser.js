const {PrismaClient} = require('@prisma/client');
const pagination = require('../../../utils/pagination')
const request = require('../../../utils/requests');


const prisma = new PrismaClient()

const getUser = async (req, res) => {
    
        // filter 
        const {email} = req.query;
        let filter = {};
        if (!email){
            filter = {
                NOT: {
                    role: "Admin",
                }
            }
        } else {
            filter = {
                NOT: {
                    role: "Admin",
                },
                email:{
                    contains: email
                }
            }
        }
        let page = req.query.page;
        if (!page){
            return request.badRequest(res, 'Please provide page');
        }
        const limit = req.query.limit || process.env.DEFAULT_PAGINATION;
        const user = await prisma.users.findMany({
            skip: (page-1) * limit,
            take: parseInt(limit),
            where: filter,
            select:{
                email: true,
                name: true,
                role: true,
                createdAt: true
            }
        });
        let totalNumber = await prisma.users.count({where: {
            NOT: {
                role: "Admin",
            }
        } });
        let {paginationData} = pagination(totalNumber, page, limit);
        return request.getManyRequest(res, "Success", user, paginationData);
  
        
    
}
module.exports = getUser;