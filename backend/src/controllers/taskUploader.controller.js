const taskModel = require("../models/task.model")

// ==================================================
// Create task api controller for the Task details 
// ===================================================
const createTaskController = async (req, res) => {
    try {

        const { title, taskNumber, theoryConcepts, handOnPractice, projectTitle, technicalRequirements, submissions, description } = req.body

        if (!title || !taskNumber || !projectTitle || !description) {
            return res.status(400).json({
                success: false,
                message: "All fieds is required"
            })
        }

        const newTask = await taskModel.create({
            title,
            taskNumber,
            theoryConcepts,
            handOnPractice,
            projectTitle,
            technicalRequirements,
            submissions,
            description
        });

        return res.status(200).json({
            success: true,
            message: "Task created successfully",
            newTask
        })
    } catch (error) {
        console.log("error while creating task", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error
        })
    }
}

// =================================
// Task code uploading controller
// =================================


const taskCodeController = async (req, res) => {
    try {

        const { taskNumber, sampleOutput } = req.body;

        if (!taskNumber || !sampleOutput) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const sample = sampleOutput

        const task = await taskModel.findOneAndUpdate(
            { taskNumber },
            { sampleOutput: sample },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Task update successfully"
        })

    } catch (error) {
        console.log("error while add code", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error
        })
    }
}



module.exports = { createTaskController, taskCodeController };