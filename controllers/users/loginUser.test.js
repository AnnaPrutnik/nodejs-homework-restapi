const jwt = require('jsonwebtoken');
require('dotenv').config();

const authService = require('../../services/auth/auth');
const {HttpCode, Role, tokenLife} = require('../../configs/constants');

const loginUser = require('./loginUser');

jest.mock('../../services/auth/auth');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

describe('Test for controller Login User', () => {
  let userId, email, password, token, subscription, mockReq, mockRes, mockNext;

  beforeEach(() => {
    email = 'test@test.com';
    password = '123456';
    userId = 'test01user';
    token = jwt.sign({userId}, JWT_SECRET_KEY, {expiresIn: tokenLife});
    subscription = Role.STARTER;
    mockReq = {body: {email, password}};
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn((data) => data),
    };
    mockNext = jest.fn();
  });

  test('should login existed user', async () => {
    authService.getUser.mockImplementation(async () => ({
      email,
      subscription,
    }));
    authService.getToken.mockReturnValue(token);

    await loginUser(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(HttpCode.OK);
    expect(mockRes.json.mock.results[0].value).toHaveProperty('token');
    expect(mockRes.json.mock.results[0].value.user).toEqual(
      expect.objectContaining({
        email: expect.any(String),
        subscription: expect.any(String),
      })
    );
  });

  test('should deny unauthorized user', async () => {
    authService.getUser.mockReturnValue(null);
    await loginUser(mockReq, mockRes, mockNext);
    expect(mockRes.status).toHaveBeenCalledWith(HttpCode.UNAUTHORIZED);
  });

  test('should show error from database service', async () => {
    const testError = new Error('Error');
    authService.getUser.mockImplementation(async () => {
      throw testError;
    });
    await loginUser(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledWith(testError);
  });
});
