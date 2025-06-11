/**
 * @fileoverview Página de gestión de propiedades del sistema
 * Permite visualizar, filtrar y crear propiedades inmobiliarias
 * @author Sistema Inmobiliario
 * @version 1.0.0
 */

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { PropertyList } from "../components/PropertyList";
import AdminLayout from "../layouts/AdminLayout";
import { getPropertyNames } from "../services/propertyService";

/**
 * Interfaz para los filtros de búsqueda de propiedades
 * @interface PropertyFilters
 */
interface PropertyFilters {
    /** Nombre de la propiedad */
    name: string;
    /** Dirección de la propiedad */
    address: string;
    /** Precio mínimo de la propiedad */
    minPrice: string;
    /** Precio máximo de la propiedad */
    maxPrice: string;
}

/**
 * Componente de la página de gestión de propiedades
 * 
 * Características:
 * - Lista de propiedades con filtros de búsqueda
 * - Carga dinámica de nombres de propiedades
 * - Filtros por nombre, dirección y rango de precios
 * - Botón para crear nuevas propiedades
 * - Integración con el layout administrativo
 * 
 * @returns {JSX.Element} Página de gestión de propiedades
 * 
 * @example
 * ```tsx
 * // Uso en el router
 * <Route path="/properties" element={<PropertiesPage />} />
 * ```
 */
export const PropertiesPage = () => {
    const navigate = useNavigate();
    const [names, setNames] = useState<string[]>([]);

    /**
     * Efecto para cargar los nombres de las propiedades al montar el componente
     * @function
     */
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

    /**
     * Estado para los filtros de búsqueda
     * @type {PropertyFilters}
     */
    const [filters, setFilters] = useState<PropertyFilters>({
        name: "",
        address: "",
        minPrice: "",
        maxPrice: "",
    });

    /**
     * Manejador de cambios en los filtros
     * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - Evento de cambio
     */
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
                    <input 
                        name="address" 
                        placeholder="Buscar por dirección" 
                        className="border p-2" 
                        onChange={handleChange} 
                    />
                    <input 
                        name="minPrice" 
                        placeholder="Precio mínimo" 
                        className="border p-2" 
                        onChange={handleChange} 
                    />
                    <input 
                        name="maxPrice" 
                        placeholder="Precio máximo" 
                        className="border p-2" 
                        onChange={handleChange} 
                    />
                </div>

                <PropertyList filters={filters} />

                <hr className="my-6" />
            </div>
        </AdminLayout>
    );
};
