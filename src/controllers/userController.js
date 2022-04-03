const services = require('../services');

class userController {
    getUser(req, res){
        services.user.getUser(req, res);
    }
}

module.exports = new userController();