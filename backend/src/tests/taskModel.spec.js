const taskModel = require('../models/taskModel');
const connection = require('../models/connection');

describe('Test taskModel', () => {

  it('Should getAllByUserId return correctly', async () => {
    connection.execute = jest.fn().mockResolvedValue([[]]);
    const response = await taskModel.getAllByUserId(0);

    expect(response).toEqual([]);
  });

  it('Should addNewTask return correctly', async () => {
    connection.execute = jest.fn().mockResolvedValue([{ insertId: 0 }]);
    const response = await taskModel.addNewTask({ title: 'Estudar JS', status: 'pendente', userId: 0 });
    
    expect(response).toEqual({ insertId: 0, title: 'Estudar JS', status: 'pendente', userId: 0 });
  });

  it('Should deleteTask return correctly', async () => {
    connection.execute = jest.fn().mockResolvedValue([{}]);
    const response = await taskModel.deleteTask(0);
    
    expect(response).toEqual({});
  });

  it('Should editTask return correctly', async () => {
    connection.execute = jest.fn().mockResolvedValue([{}]);
    const response = await taskModel.editTask(0, {title: 'Estudar Docker', status: 'pendente'});
    
    expect(response).toEqual({});
  });
});