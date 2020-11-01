import express from 'express';
import logger from 'morgan';
import fs from 'fs';
import path from 'path';
import routes from './routes';

// Port on which incoming requests will arrive
const port = process.env.PORT || 3001;
// Create the application
const app = express();

const logDir = './logs';
if (!fs.existsSync(logDir)){
  fs.mkdirSync(logDir);
}

app.use(logger('common', {
    stream: fs.createWriteStream(path.join(logDir, 'access.log'), {flags: 'a'})
}));
app.use(logger('dev'));
// support json encoded bodies
app.use(express.json());
// support urlencode
app.use(express.urlencoded({ extended: false }));
// Set the public static folder containing the front end template and logic
app.use(express.static(path.join(__dirname, './public')));

// Add routes, both API and view
app.use(routes);

// Run the web APP and store the returned variable for later export
const server = app.listen(port, () => console.log(`Listening on ${port}`));
// Export the server for unit testing
export default server;