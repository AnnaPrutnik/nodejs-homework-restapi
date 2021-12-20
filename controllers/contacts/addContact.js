const {addContact} = require('../../model/contacts');

const handlerAddContact = async (req, res, next) => {
  const body = req.body;
  const newContact = await addContact(body);
  res.status(201).json({newContact});
};

module.exports = handlerAddContact;
