const {getContactById} = require('../../model/contacts');

const handlerGetContact = async (req, res, next) => {
  const id = req.params.id;
  const contact = await getContactById(id);
  if (contact) {
    return res.status(200).json({contact});
  }
  return res.status(404).json({message: 'Not found'});
};

module.exports = handlerGetContact;
