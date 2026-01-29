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
};

// ================================
// Creating Profile of interns api
// ================================

export const createInternsProfileAPi = async(data)=>{
    try {
        const response = await axiosintance.post("api/interns/profile-create", data);
        if(response){
            return response.data;
        }
    } catch (error) {
        throw error.response?.data || error;
    }
};

// ===================================
// Fetching all interns profile api
// ====================================

export const fetchingAllInternsProfileApi = async()=>{
    try {
        const response = await axiosintance.get("/api/admin/dashboard/fetch-all-interns");
      if(response){
        return response.data;
      }
    } catch (error) {
        throw error.response?.data || error;
    }
};