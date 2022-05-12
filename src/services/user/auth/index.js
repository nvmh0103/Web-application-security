const createUser = require('./createUser');
const login = require('./login');
const generateToken = require('./generateToken');
const checkEmail = require('./checkEmail')
const isLogged = require('./isLogged')

module.exports = {
    createUser,
    login,
    generateToken,
    checkEmail,
    isLogged,
}