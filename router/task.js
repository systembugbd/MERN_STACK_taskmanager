const express = require("express");
const router = express.Router();

const { createTask, getAllTask } = require("../controller/Task");

router.route("/").get(getAllTask).post(createTask);

module.exports = router;
