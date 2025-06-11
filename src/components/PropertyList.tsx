import { useEffect, useState } from "react";
import { Property } from "../types/Property";
import { getProperties } from "../services/propertyService";
import { useNavigate } from 'react-router-dom';
interface Props {
  filters: {
    name: string;
    address: string;
    minPrice: string;
    maxPrice: string;
  };
}

export const PropertyList = ({ filters }: Props) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const navigate = useNavigate();
  const fetchProperties = async () => {
    try {
      const data = await getProperties({
        name: filters.name || undefined,
        address: filters.address || undefined,
        minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
        maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined,
      });

      setProperties(data);
    } catch (error) {
      console.error("Error al obtener propiedades", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [filters]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {properties.map((p) => (
        <div
          key={p.idProperty}
          className="bg-white border rounded-lg shadow hover:shadow-lg transition duration-300"
        >
          <img
            src={p.fileUrl}
            alt={`Imagen de ${p.name}`}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-blue-600">{p.name}</h3>
            <p className="text-gray-600">{p.address}</p>
            <p className="text-lg text-gray-800 font-bold mt-2">${p.price.toLocaleString()}</p>
            <p className="text-sm text-gray-500">Año: {p.year}</p>
            <div> <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
              onClick={() => navigate('/propertyTrace', { state: { fileUrl: p.fileUrl } })}>
              Ver Detalles
            </button></div>
          </div>

        </div>
      ))}
    </div>
  );


};
