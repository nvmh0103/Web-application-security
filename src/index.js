const express = require('express');
const cors = require('cors');
require('dotenv').config()
const cookieSession = require('cookie-session');

const request = require('./utils/requests');
const logging = require('./middlewares/logger');
const logger = require('./utils/winston');

const router = require('./routes');


const app = express();


app.set('trust proxy',true);
app.use(cors());
app.use(express.json());
app.use(logging);
app.use(cookieSession({
    signed: false,
}))

app.use('/api/v1', router);

app.listen(3000, () => {
    logger.info('Application is up and running at 3000!');
})