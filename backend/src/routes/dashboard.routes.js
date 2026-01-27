const express = require("express");
const { deletedTaskController } = require("../controllers/dashboard.controller");

const router = express.Router();


// ===========================
// Task delete api
// ==========================
router.delete("/delete-task", deletedTaskController);

module.exports = router;