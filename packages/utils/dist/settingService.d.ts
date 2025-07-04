type FetchParam<TData> = {
    url: string;
    pageIndex?: any;
    pageSize?: any;
    status?: number;
    enabled?: boolean;
    select?: (data: any) => TData;
};
export declare function useListSettingData<TData = any>({ url, pageIndex, pageSize, status, enabled, select, }: FetchParam<TData>): import("@tanstack/react-query").UseQueryResult<import("@tanstack/react-query").NoInfer<TData>, Error>;
export declare const usePostSettingData: (url: string, params: {
    [key: string]: string | boolean;
}) => import("@tanstack/react-query").UseMutationResult<void, Error, void, unknown>;
export declare const getListSettingData: (url: any, pageIndex?: any, pageSize?: any, status?: number) => Promise<any>;
export declare const postSettingData: (url: any, params: {
    [key: string]: string | boolean;
}) => Promise<any>;
export declare const updateSettingData: (url: any, params: {
    [key: string]: string | boolean;
}) => Promise<any>;
export declare const getSettingData: (url: any, id: string) => Promise<any>;
export declare const deleteSettingData: (url: any, id: string) => Promise<any>;
export {};
//# sourceMappingURL=settingService.d.ts.map