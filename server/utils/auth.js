const jwt = require('jsonwebtoken');
require("dotenv").config();


const secret = 'supersecret';
const expiration = '1h';


// const secret = process.env.REACT_APP_ACCESS_TOKEN_SECRET;
// const expiration = process.env.REACT_APP_ACCESS_TOKEN_EXPIRATION;

module.exports = {
  authMiddleware: function ({ req}) {

    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('console logging the auth.js');
    }

    return req;
  },
  signToken: function ({ _id, username }) {
    const payload = {
      _id,
      username
    };
        
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
}