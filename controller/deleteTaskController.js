const Task = require("../models/task.model");

exports.deleteTaskbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted_task = await Task.findByIdAndDelete(id);
        if (!deleted_task) {
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
