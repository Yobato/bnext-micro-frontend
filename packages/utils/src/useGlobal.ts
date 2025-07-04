import { useQuery, QueryKey } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {axiosInstance} from "./axiosService";

type FetchParam<TData, TError> = {
    url: string
    queryKey: QueryKey
    params?: any
    status?: number
    enabled?: boolean;
    select?: (data: any) => TData;
}

export function useListData<TData = any, TError = AxiosError | Error | unknown>({
    url,
    queryKey,
    params,
    status,
    enabled,
    select,
}: FetchParam<TData, TError>) {
    return useQuery<TData, TError>({
        queryKey,
        queryFn: async () => {
            const response = await axiosInstance.get(url, {params});
            return response.data;
        },
        enabled,
        select,
    });
}
