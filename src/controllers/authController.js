const {auth} = require('../services');

class authController {
    createUser(req, res){
        auth.createUser(req, res);
    }
    login(req, res){
        auth.login(req, res);
    }
    generateToken(req, res){
        auth.generateToken(req, res);
    }
}

module.exports = new authController();