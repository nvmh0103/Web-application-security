const {user} = require('../services');

class userController {
    getUser(req, res){
        user.profile.getUser(req, res);
    }
}

module.exports = new userController();