// import { axiosInstance } from "@/utils/axiosService"
import { cashInstance } from "./cashService";
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from "axios";
export const getCashData = async (url, id) => {
    try {
        const response = await cashInstance.get(url + id);
        return response.data;
    }
    catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMSg;
        }
        throw e;
    }
};
export const getAccount = async (accountno, props) => {
    const result = {};
    const data = await getCashData('cash/account/inquiry?acctNo=', accountno);
    if (data && data.statusCode === 200) {
        const accountData = data.data;
        const response = {};
        props.forEach((field) => {
            switch (field) {
                case "productname":
                case "db_productname":
                case "cd_productname":
                    response[field] = accountData.productName;
                    break;
                case "currency":
                case "db_currency":
                case "cd_currency":
                    response[field] = accountData.currency;
                    break;
                case "accounttitle":
                case "db_accounttitle":
                case "cd_accounttitle":
                    response[field] = accountData.name;
                    break;
                case "accountNo":
                    response[field] = accountData.accountNo;
                    break;
                case "cifNo":
                    response[field] = accountData.cifNo;
                    break;
                case "name":
                    response[field] = accountData.name;
                    break;
                case "productCode":
                    response[field] = accountData.productCode;
                    break;
                case "productName":
                    response[field] = accountData.productName;
                    break;
                case "coCode":
                    response[field] = accountData.coCode;
                    break;
                case "coCodeName":
                    response[field] = accountData.coCodeName;
                    break;
                case "currency":
                    response[field] = accountData.currency;
                    break;
                case "balance":
                    response[field] = accountData.balance;
                    break;
                default:
                    response[field] = "Null";
            }
        });
        result['statusCode'] = 200;
        result["response"] = response;
    }
    else {
        throw new Error(data.statusMSg);
    }
    return result;
};
export const getCashIn = async (url, company, transactionType, fee, debitAccount, amount, creditAccount, paymentDetails, walkInId, currency) => {
    try {
        const response = await cashInstance.get(url, {
            params: {
                company,
                transactionType,
                fee,
                debitAccount,
                amount,
                creditAccount,
                paymentDetails,
                walkInId,
                currency
            }
        });
        console.log("Setor Tunai Response Data:", response.data);
        return response.data;
    }
    catch (e) {
        console.error("error Axios :", e);
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMsg || "Terjadi kesalahan saat menghubungi server";
        }
        throw new Error("Terjadi kesalahan jaringan");
    }
};
export const getCashOut = async (url, company, transactionType, fee, debitAccount, amount, creditAccount, paymentDetails, walkInId) => {
    try {
        const response = await cashInstance.get(url, {
            params: {
                company,
                transactionType,
                fee,
                debitAccount,
                amount,
                creditAccount,
                paymentDetails,
                walkInId,
            }
        });
        console.log("getCashOut Response Data:", response.data);
        return response.data;
    }
    catch (e) {
        console.error("error Axios :", e);
        if (axios.isAxiosError(e) && e.response) {
            throw e.response.data.statusMsg || "Terjadi kesalahan saat menghubungi server";
        }
        throw new Error("Terjadi kesalahan jaringan");
    }
};
export function useAccountQuery(accountNo, fields) {
    return useQuery({
        queryKey: ['account', accountNo],
        enabled: !!accountNo,
        queryFn: async () => {
            if (!accountNo)
                throw new Error('No account number provided');
            const response = await cashInstance.get(`cash/account/inquiry?acctNo=${accountNo}`);
            const data = response.data;
            if (data.statusCode !== 200) {
                throw new Error(data.statusMSg || 'Failed to fetch account');
            }
            const accountData = data.data;
            const result = {};
            fields.forEach((field) => {
                switch (field) {
                    case 'productname':
                        result.productname = accountData.productName;
                        break;
                    case 'currency':
                        result.currency = accountData.currency;
                        break;
                    case 'accounttitle':
                        result.accounttitle = accountData.name;
                        break;
                    case 'cifNo':
                        result.cifNo = accountData.cifNo;
                        break;
                    case 'balance':
                        result.balance = accountData.balance;
                        break;
                    default:
                        // no operation
                        break;
                }
            });
            return result;
        },
    });
}
export function useLimitAccountQuery(branchCd, userName, currency) {
    return useQuery({
        queryKey: ['debitAcc', branchCd, userName],
        enabled: !!branchCd && !!userName,
        queryFn: async () => {
            const response = await cashInstance.get('/cash/transactions/limitAccount', {
                params: { branchId: branchCd, userName, currency },
            });
            const limitData = response.data?.data?.[0];
            console.log("(useLimitAccountQuery) response: ", limitData);
            return limitData;
        },
    });
}
export function useCashOutMutation() {
    return useMutation({
        mutationFn: async (params) => {
            const response = await cashInstance.get('cash/transactions/transactionTunai', { params });
            if (response.data?.statusCode !== 200) {
                throw new Error(response.data?.statusMsg || 'Cashout failed');
            }
            return response.data;
        },
    });
}
