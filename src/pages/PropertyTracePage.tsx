import { useNavigate } from 'react-router-dom';
import { PropertyTraceTable } from "../components/PropertyTraceTable";
import { useLocation } from "react-router-dom";

export const PropertyTracePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fileUrl = location.state?.fileUrl;

    return (
        <div className="p-6">
            <button
                className="bg-[#5d3a00] hover:bg-[#7b4c00] text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
                onClick={() => navigate('/properties')}
            >
                Volver
            </button>
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Trazabilidad de la propiedad</h2>

                {fileUrl && (
                    <div className="flex flex-col items-center gap-2">
                        <img
                            src={fileUrl}
                            alt="Imagen de propiedad"
                            className="w-64 h-64 object-cover rounded-2xl shadow-lg border border-gray-300"
                        />
                        <span className="text-sm text-gray-600">Imagen asociada a la propiedad</span>
                    </div>
                )}
            </div>
            <PropertyTraceTable />

            <hr className="my-6" />
        </div>
    );
};
