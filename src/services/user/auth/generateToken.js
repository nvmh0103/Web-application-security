const jwt = require('../../../utils/jwt');
const request = require('../../../utils/requests');

const generateToken = (req, res) => {
    try {
        const receiveToken= req.header('Authorization').replace('Bearer', '').trim();
        const {email} = jwt.verifyRefreshToken(receiveToken);
        const token = jwt.signToken({email});
        return request.okRequest(res,"Success!", {token});
    } catch (err){
        return request.badRequest(res, "Please log in again!");
    }
}
module.exports = generateToken;