import { useLocation, useNavigate } from "react-router-dom";
import { PropertyTraceTable } from "../components/PropertyTraceTable";
import AdminLayout from '../layouts/AdminLayout';

export const PropertyTracePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const fileUrl = location.state?.fileUrl;
    const idProperty = location.state?.idProperty;
  
    return (
        <AdminLayout
            title="Gestión de trazabilidad de la propiedad"
            subtitle="Administra y visualiza la trazabilidad de la propiedad"
        >
            <div className="p-6">
                <div className="mb-8">

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
                    <div> <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
                        onClick={() => navigate('/createPropertyTrace', { state: { idProperty: idProperty, fileUrl: fileUrl } })}>
                        Crear
                    </button></div>
                </div>
                <PropertyTraceTable idProperty={idProperty} />
                <hr className="my-6" />
            </div>
        </AdminLayout>
    );
};
