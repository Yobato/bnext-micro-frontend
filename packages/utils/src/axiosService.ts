import axios from "axios";

const baseURLApiGateway = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

const axiosInstance = axios.create({
    baseURL: baseURLApiGateway,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json'
    }
});

const masterdataURLApiGateway = process.env.NEXT_PUBLIC_API_MASTER_DATA_URL;

const masterdataInstance = axios.create({
    baseURL: masterdataURLApiGateway,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export { axiosInstance, masterdataInstance }