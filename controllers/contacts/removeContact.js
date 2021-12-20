const {removeContact} = require('../../model/contacts');

const handlerRemoveContact = async (req, res, next) => {
  const id = req.params.id;
  const deleteStatus = await removeContact(id);
  if (!deleteStatus) {
    return res.status(404).json({message: 'Not found'});
  }
  res.status(200).json({message: 'contact deleted'});
};

module.exports = handlerRemoveContact;
