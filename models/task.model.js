const mongoose = require("mongoose"); // import the mongoose as this model is going to save in the mongoDB

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 60,
        },
        description: {
            type: String,
        },
        status: {
            type: String,
            enum: ["pending", "completed"],
            default: "pending",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema); // exporting the model
