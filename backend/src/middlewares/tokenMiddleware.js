require('dotenv').config();

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateToken = (request, response, next) => {

  const token = request.headers['authorization'];

  if (!token) {
    return response.status(401).json({ error: 'Token not found' });
  }

  const decoded = jwt.verify(token, secret);

  request.userData = decoded;

  next();

};

module.exports = { validateToken };