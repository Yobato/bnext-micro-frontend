import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosService";
export function useListData({ url, queryKey, params, status, enabled, select, }) {
    return useQuery({
        queryKey,
        queryFn: async () => {
            const response = await axiosInstance.get(url, { params });
            return response.data;
        },
        enabled,
        select,
    });
}
