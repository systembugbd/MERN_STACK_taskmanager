const express = require("express");
const Task = require("../schema/Task");
const asyncHandler = require("../middlewar/asyncHandler");
const { createCustomError } = require("../error/customErrorAPI");

const createTask = asyncHandler(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(200).json({ status: "Task Successfully Created", task });
});

const getAllTask = asyncHandler(async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTaskById = asyncHandler(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findById({ _id: taskID });

  if (!task) {
    return next(
      createCustomError(`Task not found with the given ID ${taskID}`, 404)
    );
  }
  res.status(200).json({ task });
});

const patchTaskById = asyncHandler(async (req, res, next) => {
  const { id: taskID } = req.params;

  const newTask = req.body;

  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`Task Not found with the ID ${taskID}`, 404));
  }

  await Task.findByIdAndUpdate(taskID, newTask, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    message: `Task Updated Successfully with ID ${taskID}`,
    task: newTask,
  });
});

const deleteTaskById = asyncHandler(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete(taskID);

  res
    .status(200)
    .json({ message: `Task deleted successfully with the ID:${taskID} ` });
});

module.exports = {
  getAllTask,
  createTask,
  getTaskById,
  patchTaskById,
  deleteTaskById,
};
