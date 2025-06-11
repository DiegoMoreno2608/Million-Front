import React from 'react';
import HeaderAdmin from '../components/headerAdmin';
import FooterAdmin from '../components/FooterAdmin';

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ 
  children, 
  title = "Panel de Administración",
  subtitle 
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <HeaderAdmin />
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Page Header */}
        {(title || subtitle) && (
          <div className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  {title && (
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      {title}
                    </h1>
                  )}
                  {subtitle && (
                    <p className="mt-1 text-sm text-gray-500">
                      {subtitle}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                  {/* Action buttons can be added here if needed */}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Page Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow-sm rounded-lg border border-gray-200">
            <div className="p-6">
              {children}
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <FooterAdmin />
    </div>
  );
};

export default AdminLayout;

/*
Ejemplo de uso:

import AdminLayout from '../layouts/AdminLayout';

const MiPagina = () => {
  return (
    <AdminLayout 
      title="Gestión de Propiedades" 
      subtitle="Administra y visualiza todas las propiedades del sistema"
    >
      <div>
        <h2>Contenido de la página aquí</h2>
        <p>Tu contenido personalizado va aquí...</p>
      </div>
    </AdminLayout>
  );
};
*/
