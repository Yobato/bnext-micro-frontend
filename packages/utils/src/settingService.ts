import { rootForm } from "@bnext/types/formData";
import { axiosInstance } from "./axiosService"
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type FetchParam<TData> = {
    url: string,
    pageIndex?: any,
    pageSize?: any,
    status?: number
    enabled?: boolean; // Mengontrol apakah query langsung dijalankan
    select?: (data: any) => TData
}
export function useListSettingData<TData = any>({
    url,
    pageIndex,
    pageSize,
    status,
    enabled,
    select,
}: FetchParam<TData>) {
    return useQuery<TData>({
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

export const usePostSettingData = (url: string, params: { [key: string]: string | boolean }) => {
    return useMutation({
        mutationFn: async (body) => {
            const response = await axiosInstance.post(url, params);
            // const response = formState === 'create' ? await postData('/user/menu/add', finalForm) : await updateData('/user/menu/edit', finalForm);
        }
    })
}

export const getListSettingData = async (url: any, pageIndex?: any, pageSize?: any, status?: number) => {
    try {
        const response = await axiosInstance.get(url, {
            params: {
                pageNum: String(Number(pageIndex) - 1),
                pageSize: Number(pageSize),
                ...(status ? { status: status } : {})
            }
        });
        return response.data;
    } catch (e) {
        throw e;
    }
}


export const postSettingData = async (url: any, params: { [key: string]: string | boolean }) => {
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

export const updateSettingData = async (url: any, params: { [key: string]: string | boolean }) => {
    try {
        const response = await axiosInstance.put(url, params);
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
}

export const getSettingData = async (url: any, id: string) => {
    try {
        const response = await axiosInstance.get(url, {
            params: {
                id: id
            }
        });
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
}

export const deleteSettingData = async (url : any, id: string ) => {
    try {
        const response = await axiosInstance.delete(url, {
            params: {
                id: id
            }
        });
        return response.data;
    } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                throw e.response.data.statusMSg;
            }
        throw e;
    }
}
