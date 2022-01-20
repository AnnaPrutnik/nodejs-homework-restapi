const User = require('../../models/User');

const updateUser = async (userId, body) => {
  const user = await User.findOneAndUpdate(
    {_id: userId},
    {...body},
    {
      new: true,
      runValidators: true,
    }
  );
  return user;
};

module.exports = updateUser;
