import { axiosInstance } from "./axiosService"
import { Credentials } from "@bnext/types"
import axios from "axios";


export const actionLogin = async (userId: string, password: string) => {
    try {
        const response = await axios.post(
            "http://api.bnext.localhost:4000/login", 
            {userId, password}, 
            {withCredentials: true}
        )
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
}

export const getMe = async () => {
    try {
        const response = await axios.get(
            "http://api.bnext.localhost:4000/me",
            {withCredentials: true}
        )
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
}

export const actionLogout = async() => {
    try {
        const response = await axios.post(
            "http://api.bnext.localhost:4000/logout",
            {},
            {withCredentials: true}
        )
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
}