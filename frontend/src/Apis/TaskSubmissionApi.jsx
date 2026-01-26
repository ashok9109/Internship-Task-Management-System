import { axiosintance } from "../config/axiosintance"


// =============================
// Submission task api
// ===========================


export const taskSubmissionApi = async(data)=>{
    try {
        const response = await axiosintance.post("/api/submission/intern-task", data);
        if(response){
            return response.data;
        }
    } catch (error) {
        throw error.response?.data || error;
    }
}