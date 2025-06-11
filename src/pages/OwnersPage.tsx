/**
 * @file OwnersPage.tsx
 * @description Página de gestión de propietarios. Permite crear nuevos propietarios y visualizar la lista existente.
 * Incluye formulario de creación, previsualización de foto y tabla de propietarios.
 * 
 * @module pages/OwnersPage
 */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { createOwner, getOwners } from '../services/ownerService';
import Toast from '../components/Toast';
import AdminLayout from '../layouts/AdminLayout';

/**
 * Interfaz que representa un propietario.
 * @typedef {Object} Owner
 * @property {string} idOwner - Identificador único del propietario.
 * @property {string} name - Nombre del propietario.
 * @property {string} address - Dirección del propietario.
 * @property {string} [photo] - URL de la foto del propietario.
 * @property {string} birthday - Fecha de nacimiento del propietario.
 */
interface Owner {
  idOwner: string;
  name: string;
  address: string;
  photo?: string;
  birthday: string;
}

/**
 * Componente principal para la gestión de propietarios.
 * Permite crear un nuevo propietario y muestra la lista de propietarios existentes.
 * 
 * @component
 * @returns {JSX.Element}
 */
export default function OwnersPage() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [owners, setOwners] = useState<Owner[]>([]);
  const [form, setForm] = useState<{
    name: string;
    address: string;
    birthday: string;
    photo: File | null;
  }>({
    name: '',
    address: '',
    birthday: '',
    photo: null,
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  /**
   * Obtiene la lista de propietarios al montar el componente.
   */
  useEffect(() => {
    fetchOwners();
  }, []);

  /**
   * Llama al servicio para obtener los propietarios y actualiza el estado.
   * @async
   */
  const fetchOwners = async () => {
    const data = await getOwners();
    setOwners(data);
  };

  /**
   * Maneja los cambios en los campos de texto del formulario.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Maneja el cambio de la foto en el formulario y genera una previsualización.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio.
   */
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setForm((prev) => ({ ...prev, photo: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  /**
   * Maneja el envío del formulario para crear un nuevo propietario.
   * Llama al servicio, limpia el formulario y muestra un toast.
   * @param {React.FormEvent} e - Evento de envío del formulario.
   * @async
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createOwner({
      name: form.name,
      address: form.address,
      birthday: form.birthday,
      photo: form.photo!,
    });

    setForm({ name: '', address: '', birthday: '', photo: null });
    setPreviewUrl(null);
    fetchOwners();
    setShowToast(true);
  };

  return (
    <AdminLayout 
      title="Gestión de Propietarios" 
      subtitle="Administra y visualiza todos los propietarios del sistema"
    >  
    <div className="min-h-screen p-6">
      {showToast && (
        <Toast message="Propietario creado exitosamente" onClose={() => setShowToast(false)} />
      )}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-10">
        <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold mb-4">Crear Propietario</h3>
        <button
          type="submit"
           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 px-4 rounded-full shadow-md transition duration-300"
        >
          Crear
        </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Campos del formulario */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="border p-2 rounded"
            required
          />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Dirección"
            className="border p-2 rounded"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="date"
            name="birthday"
            value={form.birthday}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          {previewUrl && (
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600">Vista previa de la imagen:</p>
              <img src={previewUrl} alt="Preview" className="w-24 h-24 object-cover rounded-full mt-2" />
            </div>
          )}
        </div>

      </form>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Nombre</th>
              <th className="p-3">Dirección</th>
              <th className="p-3">Foto</th>
              <th className="p-3">Cumpleaños</th>
            </tr>
          </thead>
          <tbody>
            {owners.map((owner) => (
              <tr key={owner.idOwner} className="border-t">
                <td className="p-3">{owner.name}</td>
                <td className="p-3">{owner.address}</td>
                <td className="p-3">
                  <img
                    src={owner.photo}
                    alt="Foto"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>
                <td className="p-3">{new Date(owner.birthday).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AdminLayout>
  );
}
