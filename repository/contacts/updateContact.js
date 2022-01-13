const Contact = require('../../models/Contact');

const updateContact = async (userId, contactId, body) => {
  const changeContact = await Contact.findOneAndUpdate(
    {_id: contactId, owner: userId},
    {...body},
    {
      new: true,
      runValidators: true,
    }
  );
  return changeContact;
};

module.exports = updateContact;
