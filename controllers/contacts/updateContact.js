const contactRepository = require('../../repository/contacts');
const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const updateContact = async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const userId = req.user.id;
    const body = req.body;
    const changeContact = await contactRepository.updateContact(
      userId,
      contactId,
      body
    );
    if (!changeContact) {
      return res.status(HttpCode.BAD_REQUEST).json({
        code: HttpCode.BAD_REQUEST,
        status: responseStatus.ERROR,
        message: `${responseMessages.NO_CONTACT} ${contactId}`,
      });
    }
    res.status(HttpCode.OK).json({
      code: HttpCode.OK,
      status: responseStatus.SUCCESS,
      message: `${responseMessages.UPDATE_CONTACT}: ${contactId}`,
      data: changeContact,
    });
  } catch (error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: error.message,
    });
  }
};

module.exports = updateContact;
