interface AccountResponse {
    productname?: string;
    currency?: string;
    accounttitle?: string;
    cifNo?: string;
    balance?: number;
}
export declare const getCashData: (url: string, id: string) => Promise<any>;
export declare const getAccount: (accountno: string, props: string[]) => Promise<{
    [key: string]: any;
}>;
export declare const getCashIn: (url: string, company: string, transactionType: string, fee: string, debitAccount: string, amount: string, creditAccount: string, paymentDetails: string, walkInId: string, currency: string) => Promise<any>;
export declare const getCashOut: (url: string, company: string, transactionType: string, fee: string, debitAccount: string, amount: string, creditAccount: string, paymentDetails: string, walkInId: string) => Promise<any>;
export declare function useAccountQuery(accountNo: string | undefined, fields: string[]): import("@tanstack/react-query").UseQueryResult<AccountResponse, Error>;
export declare function useLimitAccountQuery(branchCd: string, userName: string, currency: string): import("@tanstack/react-query").UseQueryResult<any, Error>;
export declare function useCashOutMutation(): import("@tanstack/react-query").UseMutationResult<any, Error, {
    company: string;
    transactionType: string;
    fee: string;
    debitAccount: string;
    amount: string;
    creditAccount: string;
    paymentDetails: string;
    walkInId: string;
}, unknown>;
export {};
//# sourceMappingURL=customerService.d.ts.map