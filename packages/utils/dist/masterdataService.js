import { masterdataInstance } from "./axiosService";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
export function useListData({ url, pageIndex, pageSize, status, enabled, select, }) {
    return useQuery({
        queryKey: ['fetchMasterDataList', pageIndex, pageSize],
        queryFn: async () => {
            const response = await masterdataInstance.get(url, {
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
export const usePostData = (url, params) => {
    return useMutation({
        mutationFn: async (body) => {
            const response = await masterdataInstance.post(url, params);
            // const response = formState === 'create' ? await postData('/user/menu/add', finalForm) : await updateData('/user/menu/edit', finalForm);
        }
    });
};
export const getListData = async (url, pageIndex, pageSize, status) => {
    try {
        const response = await masterdataInstance.get(url, {
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
export const postData = async (url, params) => {
    try {
        const response = await masterdataInstance.post(url, params);
        return response.data;
    }
    catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
};
export const updateData = async (url, params) => {
    try {
        const response = await masterdataInstance.put(url, params);
        return response.data;
    }
    catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
};
export const getData = async (url, id) => {
    try {
        const response = await masterdataInstance.get(url, {
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
export const deleteData = async (url, id) => {
    try {
        const response = await masterdataInstance.delete(url, {
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
