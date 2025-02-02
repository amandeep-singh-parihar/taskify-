// here we don't create a controller like "getTasks" because if the user don't provide and status it automatically fetch all tasks

const Task = require("../models/task.model"); // import the Task model

// creating the controller (function) which will invoke when hitting the route which it is mapped with
exports.getTaskById = async (req, res) => {
    try {
        const { id } = req.params; // retriving the id from the params
        const that_task = await Task.findById(id); // the "that_task" is the object having the id which we are searching

        if (!that_task) { // if that id doesn't exists
            return res.status(500).json({
                success: false,
                message: `No task with the id : ${id}`,
            });
        }
        // if that id exists 
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

// creating the controller (function) which will invoke when hitting the route which it is mapped with
exports.getTaskByStatus = async (req, res) => {
    try {
        const { status } = req.query; // retrive the status from the query
        let tasks; // let a variable tasks
        if (status) { // if status is found 
            tasks = await Task.find({ status }); // if check the status value either it is "complete" or "pending"
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
