/*
 *  External dependencies
 */
import express from 'express';
import bodyParser from 'body-parser';
// import expressJwt from 'express-jwt';

/*
 *  Internal dependencies
 */
// import config from './config';
import router from './routes/api';

const app = express();

// Register Node.js Middleware
app.use(express.static('public'));
app.use(bodyParser.json());       // supports JSON-encoded bodies
app.use(bodyParser.urlencoded({   // supports URL-encoded bodies
  extended: true
}));

//  API Routes
app.use('/api', router);

//  JWT
/*
app.use(expressJwt({
  secret: config.auth.jwt.secret
}).unless({
  path: ['/user/login', '/user/register']
}));
*/

// Start Server
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening on port 9999');
});
