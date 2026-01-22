const express = require("express");
const { createTaskController } = require("../controllers/taskUploader.controller");


const router = express.Router();

// ==============================
// create task for task details 
// ===============================

router.post("/task-uploader", createTaskController);

module.exports = router;