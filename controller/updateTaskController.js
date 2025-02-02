const Task = require("../models/task.model"); // import the Task model

// creating the controller (function) which will invoke when hitting the route which it is mapped with
exports.updateTaskById = async (req, res) => {
    try {
        const id = req.params.id; // retrive the id from the params
        const { title, description, status } = req.body; // retrive the title , description , status want to update
        const task_to_update = await Task.findByIdAndUpdate(
            { _id: id }, // find on the basis of id
            { title, description, status, updatedAt: Date.now() }, // fields to update
            { new: true } // this function sends the response of new data (updated data)
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
