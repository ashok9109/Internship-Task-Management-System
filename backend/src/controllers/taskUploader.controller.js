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
            success:true,
            message:"Task created successfully",
            newTask
        })
    } catch (error) {
        console.log("error while creating task", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = { createTaskController };