const jwt = require('jsonwebtoken');
const {
  findUserByEmail,
  addUser,
  setToken,
  findUserById,
} = require('../../repository/users');

const {tokenLife} = require('../../configs/constants');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

class AuthService {
  async isUserExist(email) {
    const user = await findUserByEmail(email);
    return !!user;
  }

  async createUser(body) {
    const user = await addUser(body);
    return user;
  }

  async getUser(email, password) {
    const user = await findUserByEmail(email);
    const isValidPassword = await user?.isValidPassword(password);
    if (!isValidPassword) {
      return null;
    }
    return user;
  }

  async getUserById(id) {
    const user = await findUserById(id);
    return user;
  }

  getToken(user) {
    const id = user.id;
    const payload = {id};
    const token = jwt.sign(payload, JWT_SECRET_KEY, {expiresIn: tokenLife});
    return token;
  }

  async setToken(id, token) {
    await setToken(id, token);
  }

  async isValidPassword(password) {}
}

const authService = new AuthService();

module.exports = authService;
