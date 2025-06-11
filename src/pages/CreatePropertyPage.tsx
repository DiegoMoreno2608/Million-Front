// src/pages/CreatePropertyPage.tsx

import { useNavigate } from 'react-router-dom';
import { PropertyForm } from '../components/PropertyForm';

export const CreatePropertyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9f6f0] p-6">
      <button
        className="bg-[#5d3a00] hover:bg-[#7b4c00] text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 mb-6"
        onClick={() => navigate('/properties')}
      >
        Volver
      </button>

      <h2 className="text-3xl font-bold text-[#5d3a00] mb-4">Crear Propiedad</h2>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <PropertyForm />
      </div>
    </div>
  );
};
