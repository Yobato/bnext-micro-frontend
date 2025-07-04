'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toast } from "primereact/toast";
import { createContext, useContext, useRef } from "react";
const ToastContext = createContext(null);
export const ToastContextProvider = ({ children }) => {
    const toastRef = useRef(null);
    const globalOnSuccess = (message) => {
        toastRef.current?.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    };
    const globalOnError = (message) => {
        toastRef.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    };
    return (_jsxs(ToastContext.Provider, { value: { globalOnSuccess, globalOnError }, children: [_jsx(Toast, { ref: toastRef }), children] }));
};
export const useToast = () => {
    return useContext(ToastContext);
};
