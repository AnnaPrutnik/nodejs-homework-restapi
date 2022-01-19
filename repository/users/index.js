const findUserByEmail = require('./findByEmail');
const findUserById = require('./findById');
const addUser = require('./addUser');
const setToken = require('./setToken');
const updateUser = require('./updateUser');
const updateAvatar = require('./updateAvatar');

module.exports = {
  findUserByEmail,
  findUserById,
  addUser,
  setToken,
  updateUser,
  updateAvatar,
};
