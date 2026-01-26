const express = require("express");
const { taskSubmissionController } = require("../controllers/taskSubmission.controller");
const authMiddleware = require("../middlewares/auth.middleware");



const router = express.Router();

// ===========================
// Task submission api
// ==========================

router.post("/intern-task",authMiddleware, taskSubmissionController);




module.exports = router;