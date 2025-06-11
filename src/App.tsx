/**
 * @fileoverview Componente principal de la aplicación
 * Define las rutas principales y la configuración de React Router
 * @author Sistema Inmobiliario
 * @version 1.0.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OwnersPage from './pages/OwnersPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { CreatePropertyPage } from './pages/CreatePropertyPage';
import { PropertyTracePage } from './pages/PropertyTracePage';

/**
 * Componente principal de la aplicación
 * 
 * Configura el sistema de enrutamiento principal con las siguientes rutas:
 * - "/" - Página de inicio/dashboard
 * - "/owners" - Gestión de propietarios
 * - "/properties" - Listado de propiedades
 * - "/createProperty" - Formulario de creación de propiedades
 * - "/propertyTrace" - Trazabilidad de propiedades
 * 
 * @returns {JSX.Element} Configuración de rutas de la aplicación
 */
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/owners" element={<OwnersPage />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/createProperty" element={<CreatePropertyPage />} />
      <Route path="/propertyTrace" element={<PropertyTracePage />} />
    </Routes>
  );
};

export default App;
