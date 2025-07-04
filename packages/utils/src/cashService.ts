import axios from "axios";

const cashURLApiGateway = process.env.NEXT_PUBLIC_API_CASH_URL;

const cashInstance = axios.create({
    baseURL: cashURLApiGateway,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export { cashInstance };
