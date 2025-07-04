import { axiosInstance } from "./axiosService";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
export function useListSettingData({ url, pageIndex, pageSize, status, enabled, select, }) {
    return useQuery({
        queryKey: ['fetchMasterDataList', pageIndex, pageSize],
        queryFn: async () => {
            const response = await axiosInstance.get(url, {
                params: {
                    pageNum: String(Number(pageIndex) - 1),
                    pageSize: Number(pageSize),
                    ...(status ? { status: status } : {})
                }
            });
            return response.data;
        },
        enabled,
        select,
    });
}
export const usePostSettingData = (url, params) => {
    return useMutation({
        mutationFn: async (body) => {
            const response = await axiosInstance.post(url, params);
            // const response = formState === 'create' ? await postData('/user/menu/add', finalForm) : await updateData('/user/menu/edit', finalForm);
        }
    });
};
export const getListSettingData = async (url, pageIndex, pageSize, status) => {
    try {
        const response = await axiosInstance.get(url, {
            params: {
                pageNum: String(Number(pageIndex) - 1),
                pageSize: Number(pageSize),
                ...(status ? { status: status } : {})
            }
        });
        return response.data;
    }
    catch (e) {
        throw e;
    }
};
export const postSettingData = async (url, params) => {
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
export const updateSettingData = async (url, params) => {
    try {
        const response = await axiosInstance.put(url, params);
        return response.data;
    }
    catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
};
export const getSettingData = async (url, id) => {
    try {
        const response = await axiosInstance.get(url, {
            params: {
                id: id
            }
        });
        return response.data;
    }
    catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
};
export const deleteSettingData = async (url, id) => {
    try {
        const response = await axiosInstance.delete(url, {
            params: {
                id: id
            }
        });
        return response.data;
    }
    catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
};
