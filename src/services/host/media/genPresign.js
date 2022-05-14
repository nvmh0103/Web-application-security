const genPresign = require('../../../utils/s3');
const request = require('../../../utils/requests');

const genPresigned = async(req, res) => {
    try {
        const fileExtension = req.query.fileExtension;
        const userId = req.query.userId;
        const presign = await genPresign( fileExtension, userId, false);
        return request.okRequest(res, "Success", presign);
    } catch(err){
        return request.InteralServerError(res,err);
    }
}

module.exports = genPresigned;