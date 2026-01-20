import axios from 'axios'

// ==========================
// Api base Url
// ==========================

export  const axiosintance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})