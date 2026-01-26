const mongoose = require("mongoose");


const taskSubmissionSchema = new mongoose.Schema({

    taskId: mongoose.Schema.Types.ObjectId,

    taskNumber: {
        type: String
    },
    gitHubLink: {
        type: String
    },
    documentationLink: {
        type: String
    },
    remarks: {
        type: String
    },

    internId: mongoose.Schema.Types.ObjectId,

    internName: {
        type: String
    },
    internEmail: {
        type: String
    },
    status: {
        type: String,
        enum:["pending", "approved", "rejected"],
        default: "pending"
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }

})

const taskSubmissionModel = mongoose.model("Task-Submission", taskSubmissionSchema);

module.exports = taskSubmissionModel;