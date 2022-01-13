const contactRepository = require('../../repository/contacts');
const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const getSingleContact = async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const userId = req.user.id;
    const contact = await contactRepository.getSingleContact(userId, contactId);
    if (!contact) {
      return res.status(HttpCode.BAD_REQUEST).json({
        code: HttpCode.BAD_REQUEST,
        status: responseStatus.ERROR,
        message: `${responseMessages.NO_CONTACT} ${userId}`,
      });
    }
    return res
      .status(HttpCode.OK)
      .json({code: HttpCode.OK, status: responseStatus.SUCCESS, data: contact});
  } catch (error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: error.message,
    });
  }
};

module.exports = getSingleContact;
