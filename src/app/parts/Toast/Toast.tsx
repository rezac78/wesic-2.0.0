import React, { useEffect } from 'react';
interface Toast {
  message: string;
  type: string;
  onClose: () => void;
}
const Toast = ({ message, type, onClose }: Toast) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 px-6 py-2 rounded-lg shadow-lg z-50 
                    ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} 
                    text-white`}>
      {message}
    </div>
  );
};

export default Toast;
