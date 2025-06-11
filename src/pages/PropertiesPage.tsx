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

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Propiedades</h2>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 px-4 rounded-full shadow-md transition duration-300"
                    onClick={() => navigate('/createProperty')}
                >
                    Crear
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
