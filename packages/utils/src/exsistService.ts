import { axiosInstance } from "./axiosService";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { log } from "console";
import { url } from "inspector";
 
export const exsistInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_EXSIST_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
 
type FetchEXSISTParam<TData> = {
  url: string;
  cifNo: string;
  useGateway?: boolean;
  enabled?: boolean;
  select?: (data: any) => TData;
};
 
export function useFetchEXSISTData<TData = any>({
  url,
  cifNo,
  useGateway = false, 
  enabled = true,
  select,
}: FetchEXSISTParam<TData>) {
  const instance = useGateway ? axiosInstance : exsistInstance;
 
  return useQuery<TData>({
    queryKey: ["fetchEXSISTData", cifNo],
    queryFn: async () => {
      const response = await instance.get(url, {
        params: { cifNo },
      });
      return response.data;
    },
    enabled,
    select,
  });
}
 
export const getEXSISTData = async (url: string, cifNo: string, useGateway = false) => {
  const instance = useGateway ? axiosInstance : exsistInstance;
 
  try {
    const response = await instance.get(url, {
      params: { cifNo },
    });
    console.log("Response Data:", response.data);
    return response.data;
  } catch (e) {
    console.error("Error Axios:", e); 
    if (axios.isAxiosError(e) && e.response) {
      throw e.response.data.statusMsg || "Terjadi kesalahan saat menghubungi server";
    }
    throw new Error("Terjadi kesalahan jaringan");
  }
};

//untuk portfolio
export const getPortfolioData = async (
  url: string,
  cifNo: string,
  company: string,
  input: string,
  useGateway = false
) => {
  const instance = useGateway ? axiosInstance : exsistInstance;

  try{
    const response = await instance.get(url, {
      params: {
        cifNo,
        company,
        input,
      }
    });
    console.log("Portfolio Response Data:", response.data);
    return response.data;
  }catch (e) {
    console.error("error Axios (Portofolio):", e);
    if (axios.isAxiosError(e) && e.response) {
      throw e.response.data.statusMsg || "Terjadi kesalahan saat menghubungi server";
    }
    throw new Error("Terjadi kesalahan jaringan");
  }
};
