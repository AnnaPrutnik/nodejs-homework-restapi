const User = require('../../models/User');

const setToken = async (id, token) => {
  return await User.findOneAndUpdate({_id: id}, {token});
};

module.exports = setToken;
