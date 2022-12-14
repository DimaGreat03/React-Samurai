import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': "6ce9efac-60d1-4d9d-ae9c-2846195c7d3b"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status})
    }
}








