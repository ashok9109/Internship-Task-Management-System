const express = require("express");
const { taskSubmissionController, submissionStatusController } = require("../controllers/taskSubmission.controller");
const authMiddleware = require("../middlewares/auth.middleware");



const router = express.Router();

// ===========================
// Task submission api
// ==========================

router.post("/intern-task",authMiddleware, taskSubmissionController);

// ==============================
// Submission status api
// ===========================

router.get("/task-status/:taskId", authMiddleware, submissionStatusController);



module.exports = router;