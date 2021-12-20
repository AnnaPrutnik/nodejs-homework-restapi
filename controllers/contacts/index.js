const handlerGetAllContacts = require('./getAllContacts');
const handlerGetContact = require('./getContact');
const handlerAddContact = require('./addContact');
const handlerRemoveContact = require('./removeContact');
const handlerUpdateContact = require('./updateContact');

module.exports = {
  handlerGetAllContacts,
  handlerGetContact,
  handlerAddContact,
  handlerRemoveContact,
  handlerUpdateContact,
};
