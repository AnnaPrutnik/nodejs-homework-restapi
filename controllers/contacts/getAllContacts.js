const {listContacts} = require('../../model/contacts');

const handlerGetAllContacts = async (req, res, next) => {
  const contacts = await listContacts();
  res.status(200).json({contacts});
};

module.exports = handlerGetAllContacts;
