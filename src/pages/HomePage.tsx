import { useNavigate } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <AdminLayout 
      title="Gestión de Propiedades" 
      subtitle="Administra y visualiza todas las propiedades del sistema"
    >
    <div className="min-h-screen bg-gradient-to-br flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#5d3a00]">Million Luxury Properties</h1>
        <p className="text-lg text-center text-[#5d3a00] mb-8">Sistema de gestión inmobiliaria</p>
    </div>
    </AdminLayout>
  );
}