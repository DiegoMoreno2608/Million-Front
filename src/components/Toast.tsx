/**
 * @fileoverview Componente de notificación tipo Toast
 * Muestra mensajes temporales al usuario con auto-cierre
 * @author Sistema Inmobiliario
 * @version 1.0.0
 */

import { useEffect } from "react";

/**
 * Props para el componente Toast
 * @interface ToastProps
 */
interface ToastProps {
    /** Mensaje a mostrar en la notificación */
    message: string;
    
    /** Función que se ejecuta al cerrar la notificación */
    onClose: () => void;
}

/**
 * Componente Toast para mostrar notificaciones temporales
 * 
 * Características:
 * - Se muestra en la esquina superior derecha
 * - Auto-cierre después de 3 segundos
 * - Estilo visual consistente con el diseño del sistema
 * - Animación suave de entrada/salida
 * 
 * @param {ToastProps} props - Props del componente
 * @param {string} props.message - Mensaje a mostrar
 * @param {() => void} props.onClose - Función para cerrar el toast
 * @returns {JSX.Element} Componente Toast renderizado
 * 
 * @example
 * ```tsx
 * <Toast 
 *   message="Propiedad creada exitosamente" 
 *   onClose={() => setShowToast(false)} 
 * />
 * ```
 */
export default function Toast({ message, onClose }: Readonly<ToastProps>) {
    // Efecto para auto-cerrar el toast después de 3 segundos
    useEffect(() => {
        const timer = setTimeout(() => onClose(), 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-xl shadow-md z-50">
            {message}
        </div>
    );
}
