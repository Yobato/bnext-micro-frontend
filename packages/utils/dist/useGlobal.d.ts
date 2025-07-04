import { QueryKey } from "@tanstack/react-query";
import { AxiosError } from "axios";
type FetchParam<TData, TError> = {
    url: string;
    queryKey: QueryKey;
    params?: any;
    status?: number;
    enabled?: boolean;
    select?: (data: any) => TData;
};
export declare function useListData<TData = any, TError = AxiosError | Error | unknown>({ url, queryKey, params, status, enabled, select, }: FetchParam<TData, TError>): import("@tanstack/react-query").UseQueryResult<import("@tanstack/react-query").NoInfer<TData>, TError>;
export {};
//# sourceMappingURL=useGlobal.d.ts.map