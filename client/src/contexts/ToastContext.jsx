import React, { createContext, useState, useCallback } from 'react';
import Toast from '../components/common/Toast';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ message: '', show: false });

    const showToast = useCallback((message) => {
        setToast({ message, show: true });
        setTimeout(() => {
            setToast(t => ({ ...t, show: false }));
        }, 2000); // Tự động ẩn sau 2 giây
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast message={toast.message} show={toast.show} />
        </ToastContext.Provider>
    );
};
