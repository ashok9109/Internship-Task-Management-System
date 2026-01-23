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
        console.log("this is  the code task date", data)
        if(response){
            return response.data
        }
    } catch (error) {
        throw error.response?.data || error;
    }
};