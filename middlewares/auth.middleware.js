'use strict';

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

// const authCheck = jwt({
//   secret: new Buffer(process.env.AUTH0_SECRET_ID, 'base64'),
//   audience: process.env.AUTH0_CLIENT_ID,
//   algorithms: ['RS256', 'HS256']
// });

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}.auth0.com/.well-known/jwks.json`
    }),
    // This is the identifier we set when we created the API
    audience: process.env.AUTH0_CLIENT_ID,
    //issuer: process.env.AUTH0_DOMAIN + '.auth0.com', // e.g., you.auth0.com
    algorithms: ['RS256']
});

function authenticate() {
  return authCheck;
}

module.exports = {
  authenticate
}