const taskModel = require("../models/task.model");

// =======================
// Delete task controller
// =======================

const deletedTaskController = async (req, res) => {
    try {
        const { taskId } = req.params.id;

        const task = await taskModel.findById(taskId);

        await task.deleteOne();

        return res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        })

    } catch (error) {
        console.log("error while deleting task", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error
        })
    }
}

module.exports = { deletedTaskController }