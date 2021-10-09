const Task = require("../schema/Task");

const createTask = (req, res, next) => {
  Task.create({ name: "Shaheb Ali", isCompleted: false }).then(() =>
    console.log("task created").catch((e) => console.log(e.messages))
  );

  // res.json({ message: "Task Created Successfully" });
};

const getAllTask = (req, res, next) => {
  const task = Task.find();
  console.log(task);

  // res.json({ task });
  // res.send(task);
};

module.exports = {
  getAllTask,
  createTask,
};
