const Contact = require('../../models/Contact');

const removeContact = async (userId, contactId) => {
  const deleteContact = await Contact.findOneAndRemove({
    _id: contactId,
    owner: userId,
  });
  return deleteContact;
};

module.exports = removeContact;
