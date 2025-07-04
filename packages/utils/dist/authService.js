import { axiosInstance } from "./axiosService";
import axios from "axios";
export const actionLogin = async (url, params) => {
    try {
        const response = await axiosInstance.post(url, params);
        return response.data;
    }
    catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
};
export const actionLogout = (params) => {
    try {
        const res = axiosInstance.get('user/user/logout?id=' + params);
        return res;
    }
    catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
};
