const Task = require("../models/task.model");

exports.createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const createdTask = await Task.create({ title, description, status });

        res.status(200).json({
            success: true,
            data: createdTask,
            message: "Task Created !!!",
        });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong !",
        });
    }
};
