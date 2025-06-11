/**
 * @fileoverview Componente de header para el panel de administración
 * Proporciona navegación principal, branding y perfil de usuario
 * @author Sistema Inmobiliario
 * @version 1.0.0
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Componente de header para el panel de administración
 * 
 * Características principales:
 * - Navegación responsive con menú móvil
 * - Logo y branding de la aplicación
 * - Enlaces de navegación con estado activo
 * - Perfil de usuario con avatar e información
 * - Completamente responsive para móviles y desktop
 * 
 * @returns {JSX.Element} Header del panel de administración
 */
const HeaderAdmin: React.FC = () => {
  const location = useLocation();

  /**
   * Determina si una ruta está activa comparándola con la ubicación actual
   * @param {string} path - Ruta a verificar
   * @returns {boolean} True si la ruta está activa
   */
  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Admin Panel</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActiveRoute('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/owners"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActiveRoute('/owners') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Propietarios
            </Link>
            <Link
              to="/properties"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActiveRoute('/properties') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Propiedades
            </Link>
          </nav>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full">
              <span className="sr-only">Notificaciones</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5-5-5 5h5zm0 0v-5" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">JD</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">Admin</p>
                <p className="text-xs text-gray-500">Administrador</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block px-3 py-2 text-base font-medium rounded-md ${
              isActiveRoute('/') 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/owners"
            className={`block px-3 py-2 text-base font-medium rounded-md ${
              isActiveRoute('/owners') 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Propietarios
          </Link>
          <Link
            to="/properties"
            className={`block px-3 py-2 text-base font-medium rounded-md ${
              isActiveRoute('/properties') 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Propiedades
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
