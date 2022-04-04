const jwt = require('../../utils/jwt');
const request = require('../../utils/requests');

const generateToken = (req, res) => {
    try {
        const {email} = jwt.verifyRefreshToken(req.session.jwtRefresh);
        const token = jwt.signToken({email});
        req.session.jwtToken = token;
        return request.okRequest(res,"Success!");
    } catch (err){
        return request.badRequest(res, "Please log in again!");
    }
}
module.exports = generateToken;