const {
  addContactValidation,
  changeContactValidation,
  changeFavoriteValidation,
} = require('./contacts/contactValidation');

const {
  userValidation,
  changeSubscriptionValidation,
  sendEmailValidation,
} = require('./users/userValidation');

module.exports = {
  addContactValidation,
  changeContactValidation,
  changeFavoriteValidation,
  userValidation,
  changeSubscriptionValidation,
  sendEmailValidation,
};
