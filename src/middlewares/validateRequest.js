const expressValidator = require('express-validator');
const request = require('../utils/requests');

const validateRequest = async (req, res, next) => {
    const errors = expressValidator.validationResult(req);
    if (!errors.isEmpty()){
        return request.badRequest(res, errors.array());
    }
    next();
}

module.exports = validateRequest;
