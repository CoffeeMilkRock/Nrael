import React, { useEffect, useState } from 'react';

const Toast = ({ message, show }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (show) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 1800); // Thời gian hiển thị ngắn hơn tổng thời gian chờ
            return () => clearTimeout(timer);
        }
    }, [show, message]);

    return (
        <div 
            className={`fixed bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-300
            ${visible ? 'opacity-100 translate-y-0 bg-gray-800' : 'opacity-0 translate-y-5'}
            `}
        >
            {message}
        </div>
    );
};

export default Toast;
