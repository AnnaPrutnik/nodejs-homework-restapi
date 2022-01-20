const responseStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
  FAILED: 'failed',
};

const responseMessages = {
  CREATED_CONTACT: 'Contact has been successfully creates',
  NO_CONTACT: 'Not found contact with id:',
  UPDATE_CONTACT: 'Update contact with id',
  DELETE_CONTACT: 'Delete contact with id:',
  NOT_FOUND: 'Not found',
  MISSING_FIELD: 'Missing required fields',
  MISSING_FIELDS_NAME: 'Missing required name field',
  MISSING_FIELD_EMAIL: 'missing required field email',
  MISSING_FIELD_FAVORITE: 'Missing field favorite',
  NO_FIELDS: 'Bad request: have extra field',
  USER_EXIST: 'Email in use',
  CREDENTIALS_ERROR: 'Email or password is wrong',
  NO_AUTHORIZED: 'Not authorized',
  USER_NOT_FOUND: 'User not found',
  VERIFICATION_SUCCESS: 'Verification successful',
  VERIFICATION_EMAIL_SEND: 'Verification email sent',
  VERIFICATION_ALREADY_PASSED: 'Verification has already been passed',
};

module.exports = {responseStatus, responseMessages};
