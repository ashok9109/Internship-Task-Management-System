import { axiosintance } from "../config/axiosintance"


// ======================================
// create task api for the task details 
// =====================================
export const createTaskDetailsApi = async(data) =>{
    try {
        const response = await axiosintance.post("/api/admin/task-uploader", data);
        if(response){
            return response.data;
        }
    } catch (error) {
        throw error.response?.data || error;
    }
};


// =========================================
// create task api for the task code
// ========================================

export const addCodeTaskApi = async(data)=>{
    try {
        const response = await axiosintance.patch("/api/admin/task-code-uploader", data);
        if(response){
            return response.data
        }
    } catch (error) {
        throw error.response?.data || error;
    }
};

// =============================
// Get all task api
// =============================

export const getAllTaskApi = async()=>{
    try {
        const response = await axiosintance.get("/api/admin/all-task");
        if(response){
            return response.data
        }
    } catch (error) {
        throw error.response?.data || error;
    }
}