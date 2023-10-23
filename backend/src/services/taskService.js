const taskModel = require('../models/taskModel');

const getAllByUserId = async (id) => {
  const response = await taskModel.getAllByUserId(id);
  return response;
};

const addNewTask = async (data) => {
  const response = await taskModel.addNewTask(data);
  return response;
};

const deleteTask = async (id) => {
  const response = await taskModel.deleteTask(id);
  return response;
};

const editTask = async (id, data) => {
  const response = await taskModel.editTask(id, data);
  return response;
};

module.exports = {
  getAllByUserId,
  addNewTask,
  deleteTask,
  editTask,
};