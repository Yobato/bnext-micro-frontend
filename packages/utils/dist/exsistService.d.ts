export declare const exsistInstance: import("axios").AxiosInstance;
type FetchEXSISTParam<TData> = {
    url: string;
    cifNo: string;
    useGateway?: boolean;
    enabled?: boolean;
    select?: (data: any) => TData;
};
export declare function useFetchEXSISTData<TData = any>({ url, cifNo, useGateway, enabled, select, }: FetchEXSISTParam<TData>): import("@tanstack/react-query").UseQueryResult<import("@tanstack/react-query").NoInfer<TData>, Error>;
export declare const getEXSISTData: (url: string, cifNo: string, useGateway?: boolean) => Promise<any>;
export declare const getPortfolioData: (url: string, cifNo: string, company: string, input: string, useGateway?: boolean) => Promise<any>;
export {};
//# sourceMappingURL=exsistService.d.ts.map