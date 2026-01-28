const express = require("express");
const { internsProfileController } = require("../controllers/internsProfile.controller");


const router = express.Router();

// ===============================
// Interns profile creating api
// ==============================

router.post("/profile-create",internsProfileController);



module.exports = router;