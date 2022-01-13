const Contact = require('../../models/Contact');

const getSingleContact = async (userId, contactId) => {
  const contact = await Contact.findOne({_id: contactId, owner: userId});
  return contact;
};

module.exports = getSingleContact;
