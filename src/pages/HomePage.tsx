import AdminLayout from '../layouts/AdminLayout';

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