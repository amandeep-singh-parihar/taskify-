const Task = require("../models/task.model");

exports.getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const that_task = await Task.findById(id);

        if (!that_task) {
            return res.status(500).json({
                success: false,
                message: `No task with the id : ${id}`,
            });
        }
        res.status(200).json({
            success: true,
            data: that_task,
            message: `Task "${that_task.title}" is fetched successfully !`,
        });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error.message,
        });
    }
};

exports.getTaskByStatus = async (req, res) => {
    try {
        const { status } = req.query;
        let tasks;
        if (status) {
            tasks = await Task.find({ status });
        } else {
            tasks = await Task.find(); // Fetch all tasks if no status is provided
        }
        res.status(200).json({
            success: true,
            data: tasks,
        });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error.message,
        });
    }
};
