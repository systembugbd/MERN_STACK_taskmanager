const express = require("express");
const router = express.Router();

const { createTask, getAllTask, getTaskById, patchTaskById,deleteTaskById } = require("../controller/Task");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTaskById);
router.route("/:id").patch(patchTaskById);
router.route("/:id").delete(deleteTaskById)
module.exports = router;
