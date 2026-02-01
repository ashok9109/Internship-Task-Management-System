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


// ==============================
// Submission status controller
// ==============================

const submissionStatusController = async (req, res) => {
    try {

        const { taskId } = req.params;

        const user = req.user;

        const submission = await taskSubmissionModel.findOne({
            taskId,
            internId: user._id
        })

        if (!submission) {
            return res.status(200).json({
                submitted: false
            })
        }

        return res.status(200).json({
            submitted: true,
            status: submission.status,
            submission
        })

    } catch (error) {
        console.log("error while fetching the status", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error
        })
    }
}


// ==============================================
// fetching the insterns all submitted tasks
// ==============================================

const fetchInternAllTasks = async (req, res) => {
    try {
        const { internId } = req.params;

        const internAllTask = await taskSubmissionModel.find({internId});

        if (internAllTask.length === 0) {
            return res.status(200).json({
                success: true,
                count: 0,
                message: "NO intern task found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "All task found",
            count: internAllTask.length,
            internAllTask
        })

    } catch (error) {
        console.log("error while fetching the interns all task", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error
        })
    }
};


module.exports = { taskSubmissionController, submissionStatusController, fetchInternAllTasks }