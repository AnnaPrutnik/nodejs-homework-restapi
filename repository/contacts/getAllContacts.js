const Contact = require('../../models/Contact');

const getAllContacts = async (userId, {favorite, page = 1, limit = 10}) => {
  let contacts = null;
  let total = null;
  if (favorite) {
    total = await Contact.find({owner: userId, favorite}).countDocuments();
    contacts = Contact.find({owner: userId, favorite});
  } else {
    total = await Contact.find({owner: userId}).countDocuments();
    contacts = Contact.find({owner: userId});
  }
  const skip = (Number(page) - 1) * Number(limit);
  contacts = await contacts.skip(Number(skip)).limit(Number(limit));
  return {total, contacts};
};

module.exports = getAllContacts;
