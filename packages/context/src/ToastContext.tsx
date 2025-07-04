'use client'
import { Toast } from "primereact/toast";
import { createContext, useContext, useRef } from "react";

const ToastContext = createContext<any>(null);

export const ToastContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const toastRef = useRef<Toast>(null);
    const globalOnSuccess = (message: string) => {
        toastRef.current?.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    };

    const globalOnError = (message: string) => {
        toastRef.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    };

    return (
        <ToastContext.Provider value={{ globalOnSuccess, globalOnError }}>
            <Toast ref={toastRef} />
            {children}
        </ToastContext.Provider>
    );
}

export const useToast = () => {
    return useContext(ToastContext);
};