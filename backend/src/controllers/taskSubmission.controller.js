const taskSubmissionModel = require("../models/taskSubmission.model");

// ======================================
// Interns task submission controllers
// ======================================

const taskSubmissionController = async (req, res) => {
    try {
        const { taskId, taskNumber, gitHubLink, documentationLink, remarks, } = req.body;

        if (!taskId || !taskNumber || !gitHubLink) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const user = req.user;

        const submission = await taskSubmissionModel.create({
            taskId,
            taskNumber,
            gitHubLink,
            documentationLink,
            remarks,
            internId: user._id,
            internEmail: user.email,
            internName: user.fullName
        });

        return res.status(201).json({
            success: true,
            message: "Task submitted successfuly",
            submission
        })


    } catch (error) {
        console.log("error while submitting task", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error
        })
    }
}

module.exports = { taskSubmissionController }