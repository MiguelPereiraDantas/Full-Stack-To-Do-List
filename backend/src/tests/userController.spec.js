const userController = require('../controllers/userController');
const userService = require('../services/userService');

describe('Test userController', () => {
  it('Should registerNewUser middleware return status code 201 and calls json method with a token', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

    userService.registerNewUser = jest.fn().mockResolvedValue(token);

    request = {}

    response = {
      status: jest.fn().mockReturnValue({
        json: jest.fn(),
      }),
    }

    await userController.registerNewUser(request, response);

    expect(response.status).toHaveBeenCalledWith(201);
    expect(response.status().json).toHaveBeenCalledWith({ token });
  });

  it('Should userLogin return status 404 and error message if user is not found', async () => {

    userService.userLogin = jest.fn().mockResolvedValue([]);

    request = {}

    response = {
      status: jest.fn().mockReturnValue({
        json: jest.fn(),
      }),
    }

    await userController.userLogin(request, response);

    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.status().json).toHaveBeenCalledWith({ error: 'invalid email or password' });
  });
  
  it('Should userLogin return status 200 and a token if user is found', async () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

    userService.userLogin = jest.fn().mockResolvedValue(token);

    request = {}

    response = {
      status: jest.fn().mockReturnValue({
        json: jest.fn(),
      }),
    }

    await userController.userLogin(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.status().json).toHaveBeenCalledWith({ token });
  });
});