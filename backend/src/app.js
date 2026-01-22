const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");
const cors = require("cors");
const taskUploaderRouter = require("./routes/taskUploader.routes");


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// ================================
// epress for read the json data
// =================================
app.use(express.json());

// ===================================
// Cookie parser to read the cookies
// ====================================
app.use(cookieParser());

// ========================
// Auth Api
// ========================
app.use("/api/auth", authRouter);

// ==========================
// Admin Task uploader Api
// =========================
app.use("/api/admin", taskUploaderRouter);


module.exports = app;