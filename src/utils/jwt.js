const jsonwebtoken = require('jsonwebtoken');


class jwt {
    constructor() {
        this.secret = process.env.JWT_SECRET;
        this.refreshSecret = process.env.JWT_REFRESH_SECRET;
    }

    signToken(payload) {
        return jsonwebtoken.sign(payload, this.secret, {expiresIn: process.env.EXPIRES_TOKEN_TIME});
    }

    verifyToken(token) {
        return jsonwebtoken.verify(token, this.secret);
    }
    signRefreshToken(payload) {
        return jsonwebtoken.sign(payload, this.refreshSecret, {expiresIn: process.env.EXPIRES_REFRESH_TIME});
    }

    verifyRefreshToken(token) {
        return jsonwebtoken.verify(token, this.refreshSecret);
    }
}
module.exports = new jwt();