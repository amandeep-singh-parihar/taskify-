const express = require("express");
const {
    getTasks,
    getTaskByStatus,
    getTaskById,
} = require("../controller/getTaskController");
const { createTask } = require("../controller/createTaskController");
const { updateTaskById } = require("../controller/updateTaskController");
const { deleteTaskbyId } = require("../controller/deleteTaskController");
const router = express.Router();

router.get("/tasks", getTaskByStatus);
router.get("/tasks/:id", getTaskById);
router.post("/createTask", createTask);
router.put("/updateTask/:id", updateTaskById);
router.delete("/deleteTask/:id", deleteTaskbyId);

module.exports = router;
