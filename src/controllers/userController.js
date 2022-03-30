const services = require('../services');

class userController {
    createUser(req, res){
        services.user.createUser(req, res);
    }
    getUser(req, res){
        services.user.getUser(req, res);
    }
}

module.exports = new userController();