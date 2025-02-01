const Task = require("../models/task.model");

exports.updateTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, status } = req.body;
        const task_to_update = await Task.findByIdAndUpdate(
            { _id: id },
            { title, description, status, updatedAt: Date.now() },
            { new: true }
        );
        res.status(200).json({
            success: true,
            data: task_to_update,
            message: "Task updated successfully",
        });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Something went wrong",
        });
    }
};
