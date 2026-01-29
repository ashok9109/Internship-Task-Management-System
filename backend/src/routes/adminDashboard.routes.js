const express = require("express");
const { deletedTaskController } = require("../controllers/adminDashboard.controller");
const { getAllInternsProfileController } = require("../controllers/internsProfile.controller");

const router = express.Router();


// ===========================
// Task delete api
// ==========================
router.delete("/delete-task/:taskId", deletedTaskController);

// ===============================
// fetching all interns profile
// ================================

router.get("/fetch-all-interns", getAllInternsProfileController);

module.exports = router;