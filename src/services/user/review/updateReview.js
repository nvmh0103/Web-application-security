const request = require('../../../utils/requests');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const updateReview = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id){
            return request.badRequest(res, 'Please enter Review id');
        }
        const review = await prisma.reviews.findUnique({
            where:{
                id: parseInt(id),
            },
        })
        if (!review || review.userId !== req.user.id){
            return request.notFoundRequest(res, "Review not found!");
        }
        const updatedReview = await prisma.reviews.update({where:{id:parseInt(id)}, data:{...req.body}});
        return request.okRequest(res,"Success", updatedReview);
    } catch (err){
        return request.InteralServerError(res,err);
    }
}
module.exports = updateReview;