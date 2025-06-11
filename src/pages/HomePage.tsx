/**
 * @fileoverview Página principal del panel de administración
 * Dashboard que muestra la información general del sistema
 * @author Sistema Inmobiliario
 * @version 1.0.0
 */

import AdminLayout from '../layouts/AdminLayout';

/**
 * Componente de la página principal (Dashboard)
 * 
 * Características:
 * - Utiliza el layout administrativo con header y footer
 * - Muestra el título y subtítulo del sistema
 * - Diseño responsive con gradiente de fondo
 * - Centrado vertical y horizontal del contenido
 * 
 * @returns {JSX.Element} Página principal del dashboard
 * 
 * @example
 * ```tsx
 * // Uso en el router
 * <Route path="/" element={<HomePage />} />
 * ```
 */
export default function HomePage() {

  return (
    <AdminLayout 
      title="Dashboard" 
      subtitle="Administra y visualiza todas las propiedades del sistema"
    >
    <div className="min-h-screen bg-gradient-to-br flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Million Luxury Properties</h1>
        <p className="text-lg text-center mb-8">Sistema de gestión inmobiliaria</p>
    </div>
    </AdminLayout>
  );
}