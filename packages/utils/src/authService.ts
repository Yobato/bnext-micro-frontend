import { axiosInstance } from "./axiosService"
import { Credentials } from "@bnext/types"
import axios from "axios";


export const actionLogin = async (url: string, params: Credentials) => {
    try {
        const response = await axiosInstance.post(url, params);
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
}

export const actionLogout = (params: string) => {
    try {
        const res = axiosInstance.get('user/user/logout?id='+ params)
        return res;
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
}