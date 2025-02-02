const Task = require("../models/task.model"); // importing the Task model

// creating the controller (function) which will invoke when hitting the route which it is mapped with  
exports.createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body; // retriving the title, description, status from the request body
        const createdTask = await Task.create({ title, description, status }); // create a object name "createdTask" which is of "Task" type having title, description, status

        res.status(200).json({ //sending the response
            success: true,
            data: createdTask, // it shows the newly created object of "Task" type having the fields
            message: "Task Created !!!", //message
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
