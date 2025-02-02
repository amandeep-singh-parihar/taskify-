const Task = require("../models/task.model"); // import the Task model

// creating the controller (function) which will invoke when hitting the route which it is mapped with
exports.deleteTaskbyId = async (req, res) => {
    try {
        const { id } = req.params; // retriving the id from the parameters
        const deleted_task = await Task.findByIdAndDelete(id); // here deleted_task is the object which contain the value of the task to be deleted if there exists any
        if (!deleted_task) { // if no object like that exists
            return res.status(404).json({
                success: false,
                message: "No Such task found",
            });
        }
        res.status(200).json({
            success: true,
            message: `Task ${deleted_task.title} deleted !!!`,
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
