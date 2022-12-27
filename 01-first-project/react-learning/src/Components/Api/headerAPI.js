import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': "6ce9efac-60d1-4d9d-ae9c-2846195c7d3b"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const headerAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logOut() {
        return instance.delete(`auth/login`)
    },
}








