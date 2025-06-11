/**
 * @fileoverview Servicio para gestión de propietarios
 * Contiene funciones para realizar operaciones CRUD con la API de propietarios
 * @author Sistema Inmobiliario
 * @version 1.0.0
 */

import axios from 'axios';

/** URL base de la API de propietarios */
const API_URL = 'https://localhost:44357/api/Owners';

/**
 * Crea un nuevo propietario en el sistema
 * @param {Object} owner - Datos del propietario a crear
 * @param {string} owner.name - Nombre completo del propietario
 * @param {string} owner.address - Dirección del propietario
 * @param {string} owner.birthday - Fecha de nacimiento en formato ISO
 * @param {File} owner.photo - Archivo de foto del propietario
 * @returns {Promise<Owner>} El propietario creado con su ID asignado
 * @throws {Error} Error si la creación falla
 */
export const createOwner = async (owner: {
  name: string;
  address: string;
  birthday: string;
  photo: File;
}) => {
  const formData = new FormData();
  formData.append('name', owner.name);
  formData.append('address', owner.address);
  formData.append('birthday', owner.birthday);
  formData.append('photo', owner.photo);

  const response = await axios.post(API_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

/**
 * Obtiene la lista completa de propietarios
 * @returns {Promise<Owner[]>} Array con todos los propietarios del sistema
 * @throws {Error} Error si la petición falla
 */
export const getOwners = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

/**
 * Obtiene una lista con solo los nombres de todos los propietarios
 * Útil para llenar dropdowns o listas de selección
 * @returns {Promise<string[]>} Array con los nombres de los propietarios
 * @throws {Error} Error si la petición falla
 */
export const getOwnerNames = async () => {
  const response = await axios.get(`${API_URL}/names`);
  return response.data; 
};
