const services = require('../services');

class authController {
    createUser(req, res){
        services.auth.createUser(req, res);
    }
    login(req, res){
        services.auth.login(req, res);
    }
}

module.exports = new authController();