import { useEffect, useState } from "react";
import { createProperty } from "../services/propertyService";
import { getOwnerNames } from "../services/ownerService";
import { useNavigate } from 'react-router-dom';
import Toast from "./Toast";

export const PropertyForm = () => {
  const [form, setForm] = useState<{
    idProperty?: string;
    name: string;
    address: string;
    price: string;
    codeInternal: string;
    year: string;
    idOwner: string;
    photo: File | null;
  }>({
    idProperty: "",
    name: "",
    address: "",
    price: "",
    codeInternal: "",
    year: "",
    idOwner: "",
    photo: null,
  });

  const [owners, setOwners] = useState<{ idOwner: string; name: string }[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchOwners = async () => {
      const result = await getOwnerNames();
      setOwners(result);
    };
    fetchOwners();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setForm((prev) => ({ ...prev, photo: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("address", form.address);
      formData.append("price", form.price);
      formData.append("codeInternal", form.codeInternal);
      formData.append("year", form.year);
      formData.append("idOwner", form.idOwner);
      if (form.photo) {
        formData.append("file", form.photo);
      }

      await createProperty(formData);
      setForm({
        idProperty: "",
        name: "",
        address: "",
        price: "",
        codeInternal: "",
        year: "",
        idOwner: "",
        photo: null,
      });
      setPreviewUrl(null);
      setShowToast(true);
      navigate("/properties"); 
    } catch (err) {
      console.error("Error al crear propiedad", err);
      alert("Error al crear propiedad");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      {showToast && (
        <Toast message="Propiedad creada exitosamente" onClose={() => setShowToast(false)} />

      )}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="border p-2 rounded" required />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Dirección" className="border p-2 rounded" required />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Precio" className="border p-2 rounded" required />
        <input name="codeInternal" value={form.codeInternal} onChange={handleChange} placeholder="Código Interno" className="border p-2 rounded" />
        <input name="year" type="number" value={form.year} onChange={handleChange} placeholder="Año" className="border p-2 rounded" />

        <select name="idOwner" value={form.idOwner} onChange={handleChange} className="border p-2 rounded" required>
          <option value="">Selecciona un propietario</option>
          {owners.map(owner => (
            <option key={owner.idOwner} value={owner.idOwner}>{owner.name}</option>
          ))}
        </select>

        <input type="file" accept="image/*" onChange={handlePhotoChange} className="border p-2 rounded" required />

        {previewUrl && (
          <div className="md:col-span-2">
            <p className="text-sm text-gray-600">Vista previa de la imagen:</p>
            <img src={previewUrl} alt="Preview" className="w-32 h-32 object-cover rounded-md mt-2" />
          </div>
        )}
        <div className="flex justify-end items-center mb-4 col-span-2">
              <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 px-4 rounded-full shadow-md transition duration-300"
                    type="submit"
                >
                    Crear
                </button>
        </div>
      </form>
    </div>
  );
};
