const request = require('../utils/requests');
const jwt = require('../utils/jwt');

const generateToken = (req, res, next) => {
    let check;
    try {
        check = 0;
        jwt.verifyToken(req.session.jwtToken);
    } catch (err){
        check = 1;
    }
    if (check){
        try {
            console.log("Jump refresh");
            const {email} = jwt.verifyRefreshToken(req.session.jwtRefresh);
            const token = jwt.signToken({email});
            req.session.jwtToken = token;
            next();
        } catch (err){
            return request.badRequest(res, "Please log in again!");
        }
    }
    next();
}

module.exports = generateToken;