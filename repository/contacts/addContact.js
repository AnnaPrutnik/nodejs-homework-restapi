const Contact = require('../../models/Contact');

const addContact = async (userId, body) => {
  const newContact = await Contact.create({...body, owner: userId});
  return newContact;
};

module.exports = addContact;
