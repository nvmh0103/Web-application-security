const request = require('../../utils/requests');

const getUser = (req, res) => {
    try {
        console.log(req.user);
        return request.okRequest(res, "Success", {user: req.user});
    } catch (err){
        return request.InteralServerError(res, err);
    }
}
module.exports = getUser;