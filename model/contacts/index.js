const listContacts = require('./listContacts');
const getContactById = require('./getContact');
const addContact = require('./addContact');
const removeContact = require('./removeContact');
const updateContact = require('./updateContact');

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
