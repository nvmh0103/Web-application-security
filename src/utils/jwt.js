const jsonwebtoken = require('jsonwebtoken');


class jwt {
    constructor() {
        this.secret = process.env.JWT_SECRET;
    }

    async sign(payload) {
        return jsonwebtoken.sign(payload, this.secret, {expiresIn: process.env.EXPIRES_TIME});
    }

    verify(token) {
        return jsonwebtoken.verify(token, this.secret);
    }
}
module.exports = new jwt();