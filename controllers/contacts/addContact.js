const contactRepository = require('../../repository/contacts');
const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const addContact = async (req, res, next) => {
  try {
    const body = req.body;
    const userId = req.user.id;
    const newContact = await contactRepository.addContact(userId, body);
    res.status(HttpCode.CREATED).json({
      code: HttpCode.CREATED,
      status: responseStatus.CREATED,
      message: responseMessages.CREATED_CONTACT,
      data: newContact,
    });
  } catch (error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};

module.exports = addContact;
