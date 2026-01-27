import { axiosintance } from "../config/axiosintance"


// ==========================
// Task deleting api
// ==========================

export const deleteTaskApi = async(taskId)=>{
    try {
        const response = await axiosintance.delete(`/api/admin/dashboard/delete-task/${taskId}`);
        if(response){
            return response.data;
        }
    } catch (error) {
        throw error.response?.data || error;
    }
}