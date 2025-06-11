// src/components/PropertyTraceTable.tsx
import { useEffect, useState } from "react";
import { getAllTraces } from "../services/propertyService";
import { PropertyTrace } from "../types/PropertyTrace";

interface Props {
  idProperty?: string;
}

export const PropertyTraceTable = ({ idProperty }: Props) => {
  const [traces, setTraces] = useState<PropertyTrace[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTraces(idProperty); // ⬅️ Filtra por id
      setTraces(data);
      console.log("Datos de trazas obtenidos:", data);
    };
    fetchData();
  }, [idProperty]); // ⬅️ Se ejecuta si cambia

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-gray-200 rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Propiedad</th>
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Fecha</th>
            <th className="py-2 px-4 text-left">Valor</th>
            <th className="py-2 px-4 text-left">Impuesto</th>
          </tr>
        </thead>
        <tbody>
          {traces.map((t) => (
            <tr key={t.idPropertyTrace} className="border-t hover:bg-amber-50 transition">
              <td className="py-2 px-4">{t.idProperty}</td>
              <td className="py-2 px-4">{t.name}</td>
              <td className="py-2 px-4">{new Date(t.dateSale).toLocaleDateString()}</td>
              <td className="py-2 px-4">${t.value}</td>
              <td className="py-2 px-4">${t.tax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
