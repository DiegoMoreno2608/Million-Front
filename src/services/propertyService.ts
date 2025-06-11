/**
 * @fileoverview Servicio para gestión de propiedades inmobiliarias
 * Contiene funciones para realizar operaciones CRUD con la API de propiedades
 * @author Sistema Inmobiliario
 * @version 1.0.0
 */

import axios from 'axios';

/** URL base de la API de propiedades */
const API_URL = 'https://localhost:44357/api/Properties';

/**
 * Obtiene una lista de propiedades con filtros opcionales
 * @param {Object} filters - Filtros para la búsqueda de propiedades
 * @param {string} [filters.name] - Nombre de la propiedad
 * @param {string} [filters.address] - Dirección de la propiedad
 * @param {number} [filters.minPrice] - Precio mínimo
 * @param {number} [filters.maxPrice] - Precio máximo
 * @returns {Promise<Property[]>} Lista de propiedades que coinciden con los filtros
 * @throws {Error} Error si la petición falla
 */
export const getProperties = async (filters: {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
}) => {
  const response = await axios.get(API_URL, { params: filters });
  return response.data;
};

/**
 * Crea una nueva propiedad en el sistema
 * @param {any} property - Datos de la propiedad a crear
 * @returns {Promise<Property>} La propiedad creada con su ID asignado
 * @throws {Error} Error si la creación falla
 */
export const createProperty = async (property: any) => {
  const response = await axios.post(API_URL, property);
  return response.data;
};

/**
 * Obtiene una lista con solo los nombres de todas las propiedades
 * Útil para llenar dropdowns o listas de selección
 * @returns {Promise<string[]>} Array con los nombres de las propiedades
 * @throws {Error} Error si la petición falla
 */
export const getPropertyNames = async (): Promise<string[]> => {
  const response = await axios.get(`${API_URL}/names`);
  return response.data;
};
