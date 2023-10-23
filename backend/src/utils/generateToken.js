const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const generateToken = (payload) => {

  const config = {
    expiresIn: '3d',
    algorithm: 'HS256'
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, config);

  return token;
};

module.exports = generateToken;