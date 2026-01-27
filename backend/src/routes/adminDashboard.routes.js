const express = require("express");
const { deletedTaskController } = require("../controllers/adminDashboard.controller");

const router = express.Router();


// ===========================
// Task delete api
// ==========================
router.delete("/delete-task/:taskId", deletedTaskController);

module.exports = router;