import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': "6ce9efac-60d1-4d9d-ae9c-2846195c7d3b"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const UserAPI = {
    getUser(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUserClick(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },
    follow(u) {
        return instance.post(`follow/${u}`)
    },
    unfollow(u) {
        return instance.delete(`follow/${u}`)
    }

}







