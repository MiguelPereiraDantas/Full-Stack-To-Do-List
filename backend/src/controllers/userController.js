const userService = require('../services/userService');

const registerNewUser = async ({ body }, response) => {
  const serviceResponse = await userService.registerNewUser(body);
  return response.status(201).json({ token: serviceResponse });
};

const userLogin = async ({ body }, response) => {
  const serviceResponse = await userService.userLogin(body);

  if (serviceResponse.length === 0) {
    return response.status(404).json({ error: 'invalid email or password' });  
  }
  
  return response.status(200).json({ token: serviceResponse });
};

module.exports = {
  registerNewUser,
  userLogin,
};