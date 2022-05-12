const {admin} = require('../services');
const {host} = require('../services');
const {user} = require('../services');

class authController {
    createUser(req, res){
        user.auth.createUser(req, res);
    }
    loginUser(req, res){
        user.auth.login(req, res);
    }
    generateToken(req, res){
        user.auth.generateToken(req, res);
    }
    createHost(req, res){
        host.auth.createUser(req, res);
    }
    loginHost(req, res){
        host.auth.login(req, res);
    }
    loginAdmin(req, res){
        admin.auth.login(req, res);
    }
    checkEmail(req, res){
        user.auth.checkEmail(req, res);
    }
    isLoggedIn(req, res){
        user.auth.isLogged(req, res);
    }
}

module.exports = new authController();