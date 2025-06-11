// src/pages/CreatePropertyPage.tsx

import { PropertyForm } from '../components/PropertyForm';
import AdminLayout from '../layouts/AdminLayout';

export const CreatePropertyPage = () => {

  return (
    <AdminLayout 
      title="Crear Propiedad" 
      subtitle="Crea una nueva propiedad"
    >  
        <PropertyForm />
    </AdminLayout>
  );
};
