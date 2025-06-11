// src/pages/CreatePropertyPage.tsx

import { useNavigate } from 'react-router-dom';
import { PropertyForm } from '../components/PropertyForm';
import AdminLayout from '../layouts/AdminLayout';

export const CreatePropertyPage = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout 
      title="Gestión de Propiedades" 
      subtitle="Administra y visualiza todas las propiedades del sistema"
    >  
    <div className="min-h-screen p-6">

      <div className="bg-white p-6 rounded-xl shadow-md">
        <PropertyForm />
      </div>
    </div>
    </AdminLayout>
  );
};
