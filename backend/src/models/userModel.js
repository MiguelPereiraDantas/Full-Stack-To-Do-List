const connection = require('./connection');
const generateToken = require('../utils/generateToken');

const registerNewUser = async ({ name, email, password }) => {
  const [response] = await connection.execute('INSERT INTO Todolist.Users VALUES (?, ?, ?, ?)', [0, name, email, password]);
  const token = generateToken({ id: response.insertId, name, email });
  return token;
};

const getUserByEmail = async (email)  => {
  const [response] = await connection.execute('SELECT * FROM Todolist.Users WHERE email = ?', [email]);
  return response;
};

const userLogin = async ({ email, password }) => {
  const [response] = await connection.execute('SELECT * FROM Todolist.Users WHERE email = ? AND password = ?', [email, password]);

  if (response.length === 0) return response;

  delete response[0].password;

  const token = generateToken(response[0]);
  
  return token;
};

module.exports = {
  registerNewUser,
  getUserByEmail,
  userLogin,
};