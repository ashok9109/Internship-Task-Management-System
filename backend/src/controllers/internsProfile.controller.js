const internsProfileModel = require("../models/internsProfile.model");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt")

// ==========================
// Interns profile controller
// ==========================

const internsProfileController = async (req, res) => {
    try {
        const { fullName, domain, email, password, college, mobile, location, duration, startingDate, endingDate } = req.body

        if (!email || !password || !mobile) {
            return res.status(409).json({
                success:false,
                message: "All fields are required"
            })
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const role = "intern"

        const internAuth = await userModel.create({
            fullName,
            email,
            password: passwordHash,
            mobile,
            role: role
        });

        const internProfile = await internsProfileModel.create({
            fullName,
            domain,
            role,role,
            email,
            password,
            mobile,
            college,
            location,
            duration,
            startingDate,
            endingDate
        });

        return res.status(201).json({
            success: true,
            message: "Intern profile is created",
            internAuth,
            internProfile
        });

    } catch (error) {
        console.log("Errors while creating interns profiles");
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error
        })
    }
};


// ===============================
// Fetching interns Profile
// ===============================

const getAllInternsProfileController = async(req, res)=>{
    try {
        
        const internsProfile = await internsProfileModel.find();

        return res.status(200).json({
            success:true,
            message:"Interns profile is fetched successfully",
            count:internsProfile.length,
            internsProfile
        })
    } catch (error) {
        console.log("errors while fetching interns profiles", error);
        return res.status(500).json({
            success:false,
            message:"Internal server errors",
            error:error
        })
    }
};

module.exports = {internsProfileController, getAllInternsProfileController};