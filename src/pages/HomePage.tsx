import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c2b280] to-[#8b5e3c] flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#5d3a00]">Million Luxury Properties</h1>
        <p className="text-lg text-center text-[#5d3a00] mb-8">Sistema de gestión inmobiliaria</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            className="bg-[#5d3a00] hover:bg-[#7b4c00] text-white font-semibold py-4 px-6 rounded-xl shadow-md transition duration-300"
            onClick={() => navigate('/properties')}
          >
            Gestionar Propiedades
          </button>

          <button
            className="bg-[#5d3a00] hover:bg-[#7b4c00] text-white font-semibold py-4 px-6 rounded-xl shadow-md transition duration-300"
            onClick={() => navigate('/owners')}
          >
            Gestionar Dueños
          </button>
        </div>
      </div>
    </div>
  );
}