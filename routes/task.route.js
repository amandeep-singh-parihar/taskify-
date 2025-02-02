const express = require("express"); // importing the express
const router = express.Router(); // importing the express Router
const {
    getTasks,
    getTaskByStatus,
    getTaskById,
} = require("../controller/getTaskController");
const { createTask } = require("../controller/createTaskController");
const { updateTaskById } = require("../controller/updateTaskController");
const { deleteTaskbyId } = require("../controller/deleteTaskController");

// mapping the controllers with the routes
router.get("/tasks", getTaskByStatus);
router.get("/tasks/:id", getTaskById);
router.post("/createTask", createTask);
router.put("/updateTask/:id", updateTaskById);
router.delete("/deleteTask/:id", deleteTaskbyId);

module.exports = router; // exports the routes
