/*
 *  External dependencies
 */
import express from 'express';
import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';

/*
 *  Internal dependencies
 */
import config from './server/config';
import * as users from './server/routes/users';

const app = express();

// Register Node.js middleware
app.use(express.static('public'));
app.use(bodyParser.json());       // supports JSON-encoded bodies
app.use(bodyParser.urlencoded({   // supports URL-encoded bodies
    extended: true
}));
app.use(expressJwt({
    secret: config.auth.jwt.secret
}).unless({
    path: ['/user/login', '/user/register']
}));

// API routes
const routes = {};
routes.users = users;

// app.post('/user/login', routes.users.login);
// app.post('/user/register', routes.register);

app.listen(9999, function() {
    console.log('Listening on port 9999');
});
