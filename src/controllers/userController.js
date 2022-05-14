const {user} = require('../services');
const {admin} = require('../services');

class userController {
    getUser(req, res){
        user.profile.getUser(req, res);
    }
    getAllUser(req, res){
        admin.user.getUser(req, res);
    }
}

module.exports = new userController();