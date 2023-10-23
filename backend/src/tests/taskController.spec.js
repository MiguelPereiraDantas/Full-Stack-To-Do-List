const taskController = require('../controllers/taskController');
const taskService = require('../services/taskService');

describe('Test taskController', () => {

  it(`Should getAllByUserId method return status 200 and the user's task list`, async () => {

    taskService.getAllByUserId = jest.fn().mockResolvedValue([]);

    const request = {
      body: {
        userId: 0,
      },
      userData: {
        id: 0
      }
    }

    const response = {
      status: jest.fn().mockReturnValue({
        json: jest.fn(),
      })
    }

    await taskController.getAllByUserId(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.status().json).toHaveBeenCalledWith([]);

  });

  it('Should addNewTask method return status 201', async () => {

    taskService.addNewTask = jest.fn().mockResolvedValue({});

    const request = {}

    const response = {
      status: jest.fn().mockReturnValue({
        json: jest.fn(),
      })
    }

    await taskController.addNewTask(request, response);

    expect(response.status).toHaveBeenCalledWith(201);
  });

  it('Should deleteTask method return status 200', async () => {

    taskService.deleteTask = jest.fn().mockResolvedValue({});

    const request = {
      params: {
        id: 1,
      },
    }

    const response = {
      status: jest.fn().mockReturnValue({
        json: jest.fn(),
      })
    }

    await taskController.deleteTask(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
  });

  it('Should editTask method return status 200', async () => {

    taskService.editTask = jest.fn().mockResolvedValue({});

    const request = {
      params: {
        id: 1,
      },
    }

    const response = {
      status: jest.fn().mockReturnValue({
        json: jest.fn(),
      })
    }

    await taskController.editTask(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
  });
});