const contactRepository = require('../../repository/contacts');
const {HttpCode} = require('../../configs/constants');
const {responseStatus} = require('../../configs/messages');

const getAllContacts = async (req, res) => {
  const userId = req.user.id;
  const queryParams = req.query;
  try {
    const result = await contactRepository.getAllContacts(userId, queryParams);
    const {total, contacts} = result;
    return res.status(HttpCode.OK).json({
      code: HttpCode.OK,
      status: responseStatus.SUCCESS,
      total,
      data: contacts,
    });
  } catch (error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: error.message,
    });
  }
};

module.exports = getAllContacts;
