const express = require("express");
const { createTaskController, taskCodeController } = require("../controllers/taskUploader.controller");


const router = express.Router();

// ==============================
// create task for task details 
// ===============================

router.post("/task-uploader", createTaskController);

// ===============================
// task code uploader api
// =============================

router.patch("/task-code-uploader", taskCodeController);

module.exports = router;