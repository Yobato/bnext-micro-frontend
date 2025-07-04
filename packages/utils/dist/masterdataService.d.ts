type FetchParam<TData> = {
    url: string;
    pageIndex?: any;
    pageSize?: any;
    status?: number;
    enabled?: boolean;
    select?: (data: any) => TData;
};
export declare function useListData<TData = any>({ url, pageIndex, pageSize, status, enabled, select, }: FetchParam<TData>): import("@tanstack/react-query").UseQueryResult<import("@tanstack/react-query").NoInfer<TData>, Error>;
export declare const usePostData: (url: string, params: {
    [key: string]: string | boolean;
}) => import("@tanstack/react-query").UseMutationResult<void, Error, void, unknown>;
export declare const getListData: (url: any, pageIndex?: any, pageSize?: any, status?: number) => Promise<any>;
export declare const postData: (url: any, params: {
    [key: string]: string | boolean;
}) => Promise<any>;
export declare const updateData: (url: any, params: {
    [key: string]: string | boolean;
}) => Promise<any>;
export declare const getData: (url: any, id: string) => Promise<any>;
export declare const deleteData: (url: any, id: string) => Promise<any>;
export {};
//# sourceMappingURL=masterdataService.d.ts.map