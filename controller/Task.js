const Task = require("../schema/Task");

const createTask = async (req, res, next) => {
  try {
    await Task.create(req.body)
      .then(() => res.json({ message: "Task Created Successfully" }))
      .catch((e) => res.status(205).json({ message: e.message }));
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (e) {
    res.status(500).json({ messagee: e.messagee });
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findById({ _id: taskID });

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task not found with the given ID ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAllTask,
  createTask,
  getTaskById,
};
