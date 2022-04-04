const {user} = require('../services');

class userController {
    getUser(req, res){
        user.getUser(req, res);
    }
}

module.exports = new userController();