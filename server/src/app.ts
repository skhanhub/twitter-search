import express from 'express';
import logger from 'morgan';
import fs from 'fs';
import path from 'path';

// Port on which incoming requests will arrive
const PORT = process.env.PORT || 3001;
// Create the application
const APP = express();

const LOG_DIR = './logs';
if (!fs.existsSync(LOG_DIR)){
  fs.mkdirSync(LOG_DIR);
}

APP.use(logger('common', {
    stream: fs.createWriteStream(path.join(LOG_DIR, 'access.log'), {flags: 'a'})
}));
APP.use(logger('dev'));
// support json encoded bodies
APP.use(express.json());
// support urlencode
APP.use(express.urlencoded({ extended: false }));




// Run the web APP and store the returned variable for later export
const SERVER = APP.listen(PORT, () => console.log(`Listening on ${PORT}`));
// Export the server for unit testing
export default SERVER;