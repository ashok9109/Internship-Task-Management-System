const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },

    taskNumber: {
        type: String
    },

    theoryConcepts: {
        type: String
    },

    handOnPractice: {
        type: String
    },

    projectTitle: {
        type: String
    },

    technicalRequirements: {
        type: String
    },

    sampleOutput: {
        type: String,
        default: ""
    },

    submissions: {
        type: String
    },

    description: {
        type: String
    }

}, { timestamps: true })

const taskModel = mongoose.model("Interns-Task", taskSchema);

module.exports = taskModel;