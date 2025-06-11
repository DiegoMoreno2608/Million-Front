import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPropertyTrace } from "../services/propertyService";
import { PropertyTrace } from "../types/PropertyTrace";
export const CreatePropertyTraceForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const idProperty = location.state?.idProperty;
    const fileUrl = location.state?.fileUrl;

    const [form, setForm] = useState({
        name: "",
        value: "",
        tax: "",
        dateSale: new Date().toISOString().split("T")[0], // Fecha actual por defecto
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newTrace: PropertyTrace = {
            idPropertyTrace: "", // 👈 Esto lo genera el backend normalmente, pero debe estar presente
            idProperty: idProperty,
            name: form.name,
            value: parseFloat(form.value),
            tax: parseFloat(form.tax),
            dateSale: new Date(form.dateSale).toISOString(), // 👈 ISO string
        };

        try {
            await createPropertyTrace(newTrace);
            navigate("/propertyTrace", { state: { idProperty, fileUrl } });
        } catch (error) {
            alert("Error al crear PropertyTrace");
        }
    };


    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
            <div className="flex justify-end items-center mb-4 col-span-2">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 px-4 rounded-full shadow-md transition duration-300"
                    type="button"
                    onClick={() => navigate('/')}
                >
                    Volver al Inicio
                </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Registrar Trazabilidad</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="name"
                    placeholder="Nombre"
                    className="border p-2 rounded w-full"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="value"
                    type="number"
                    placeholder="Valor de la venta"
                    className="border p-2 rounded w-full"
                    value={form.value}
                    onChange={handleChange}
                    required
                />
                <input
                    name="tax"
                    type="number"
                    placeholder="Impuesto"
                    className="border p-2 rounded w-full"
                    value={form.tax}
                    onChange={handleChange}
                    required
                />
                <input
                    name="dateSale"
                    type="date"
                    className="border p-2 rounded w-full"
                    value={form.dateSale}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
                >
                    Guardar
                </button>
            </form>
        </div>
    );
};
