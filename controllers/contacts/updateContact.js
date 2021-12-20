const {updateContact} = require('../../model/contacts');

const handlerUpdateContact = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const changeContact = await updateContact(id, body);
  if (!changeContact) {
    return res.status(404).json({message: 'Not found'});
  }
  res.status(200).json({changeContact});
};

module.exports = handlerUpdateContact;
