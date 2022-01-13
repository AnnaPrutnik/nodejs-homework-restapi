const User = require('../../models/User');

const addUser = async (body) => {
  const user = new User(body);
  return await user.save();
};

module.exports = addUser;
