import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

const SESSION_COOKIE_NAME = 'session_id';
const SESSION_KEY = 'UserInfo';

const SECRET_KEY: any = process.env.NEXT_PUBLIC_SECRET_KEY;
const EXPIRY_TIME: number = 120 * 60 * 1000;


export const encryptData = (data: string) => {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (encryptedData: string) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Error decrypting data:", error);
        return null;
    }
};

export const setUserInfo = (userInfo: object) => {
    const userData = {
        ...userInfo
    };
    // const encryptedSession = encryptData(JSON.stringify(userData));
    localStorage.setItem(SESSION_KEY, JSON.stringify(userData))

};

export const getUserInfo = () => {
    if (typeof window === 'undefined') return null;
    const encryptedData = localStorage.getItem(SESSION_KEY);
    if (!encryptedData) return null;

    // const decryptedData = decryptData(encryptedData);
    // if (!decryptedData) return null;

    const sessionData = JSON.parse(encryptedData);
    // const sessionData = null;

    return sessionData;
};

export const setSession = () => {
    const expired = Date.now() + EXPIRY_TIME
    // // const encryptedSession = encryptData(JSON.stringify(userData));
    Cookies.set('session', JSON.stringify(expired), { expires: Date.now() + EXPIRY_TIME })

}

export const getSession = () => {
    const encryptedData = Cookies.get('session');
    if (!encryptedData) return null;

    const sessionData = JSON.parse(encryptedData);
    if (Date.now() > sessionData) {
        clearSession();
        return null;
    }
    return sessionData;

}

export const updateSession = () => {
    const currentSession = getSession();
    if (currentSession) {
        setSession();
    }
}

// Clear session data
export const clearSession = () => {
    Cookies.remove('session');
    localStorage.clear()
};