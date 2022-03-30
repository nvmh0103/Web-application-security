const logger = require('../utils/winston')
const logging = (req, res, next) => {
    res.on('finish', () => {
        logger.info(`${req?.method} ${res.statusCode} ${req?.originalUrl}`);
    })
    next();
    
}
module.exports = logging;