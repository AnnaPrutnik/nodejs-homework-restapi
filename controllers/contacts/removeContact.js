const contactRepository = require('../../repository/contacts');
const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const removeContact = async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const userId = req.user.id;
    const deleteContact = await contactRepository.removeContact(
      userId,
      contactId
    );
    if (!deleteContact) {
      return res.status(HttpCode.BAD_REQUEST).json({
        code: HttpCode.BAD_REQUEST,
        status: responseStatus.ERROR,
        message: `${responseMessages.NO_CONTACT} ${contactId}`,
      });
    }
    res.status(HttpCode.OK).json({
      code: HttpCode.OK,
      status: responseStatus.SUCCESS,
      message: `${responseMessages.DELETE_CONTACT} ${contactId}`,
      data: deleteContact,
    });
  } catch (error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: error.message,
    });
  }
};

module.exports = removeContact;
