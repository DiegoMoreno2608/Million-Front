import { useEffect, useState } from "react";
import { PropertyList } from "../components/PropertyList";
import { PropertyForm } from "../components/PropertyForm";
import { useNavigate } from 'react-router-dom';
import { getPropertyNames } from "../services/propertyService";
import AdminLayout from "../layouts/AdminLayout";

export const PropertiesPage = () => {
    const navigate = useNavigate();
    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        const fetchNames = async () => {
            try {
                const result = await getPropertyNames();
                setNames(result);
            } catch (err) {
                console.error("Error al cargar nombres", err);
            }
        };

        fetchNames();
    }, []);
    const [filters, setFilters] = useState({
        name: "",
        address: "",
        minPrice: "",
        maxPrice: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <AdminLayout 
      title="Gestión de Propiedades" 
      subtitle="Administra y visualiza todas las propiedades del sistema"
    >
        <div className="p-6">
            <div>     <button
                className="bg-[#5d3a00] hover:bg-[#7b4c00] text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
                onClick={() => navigate('/')}
            >
                Volver
            </button></div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Propiedades</h2>
                <button
                    className="bg-[#5d3a00] hover:bg-[#7b4c00] text-white font-semibold py-4 px-6 rounded-xl shadow-md transition duration-300"
                    onClick={() => navigate('/createProperty')}
                >
                    Crear Propiedad
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <select
                    name="name"
                    className="border p-2"
                    onChange={handleChange}
                    value={filters.name}
                >
                    <option value="">-- Todas las propiedades --</option>
                    {names.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <input name="address" placeholder="Buscar por dirección" className="border p-2" onChange={handleChange} />
                <input name="minPrice" placeholder="Precio mínimo" className="border p-2" onChange={handleChange} />
                <input name="maxPrice" placeholder="Precio máximo" className="border p-2" onChange={handleChange} />
            </div>

            <PropertyList filters={filters} />

            <hr className="my-6" />
        </div>
    </AdminLayout>
    );
};
