const express = require('express');
const cors = require('cors');
const lusca = require('lusca')
const helmet = require('helmet');
const compression = require('compression');
const listen = require('./events/listen');

require('dotenv').config()
const cookieSession = require('cookie-session');

const logging = require('./middlewares/logger');
const logger = require('./utils/winston');

const router = require('./routes');



const app = express();

// setting http headers
app.set('trust proxy',true);

// setting cors
app.use(cors());

// using helmet 
app.use(helmet());

// using compression to reduce size
app.use(compression());

// setting csrf protection
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

// parsing json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");


// using logging
app.use(logging);
app.use(cookieSession({
    signed: false,
    httpOnly: true,
}))
try {
    listen("booking_events");
    logger.info("Listening to booking events!");
} catch (err){
    logger.error("Please re-run the application");
}


app.use('/api/v1', router);

app.listen(3000, () => {
    logger.info('Application is up and running at 3000!');
})
