import { useEffect } from "react";

interface ToastProps {
    message: string;
    onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => onClose(), 3000); // auto-cierra en 3 segundos
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-xl shadow-md z-50">
            {message}
        </div>
    );
}
