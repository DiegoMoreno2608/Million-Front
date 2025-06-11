// src/pages/CreatePropertyPage.tsx

import { useNavigate } from 'react-router-dom';
import { PropertyForm } from '../components/PropertyForm';
import AdminLayout from '../layouts/AdminLayout';

export const CreatePropertyPage = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout 
      title="Crear Propiedad" 
      subtitle="Crea una nueva propiedad"
    >  
        <PropertyForm />
    </AdminLayout>
  );
};
