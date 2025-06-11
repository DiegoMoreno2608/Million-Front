/**
 * @fileoverview Servicio para gestión de trazabilidad de propiedades
 * Maneja el historial de transacciones y cambios de propiedad
 * @author Sistema Inmobiliario
 * @version 1.0.0
 */

import axios from 'axios';

/** URL base de la API de trazabilidad de propiedades */
const API_URL = 'https://localhost:44357/api/PropertiesTrace';

/**
 * Obtiene el historial completo de trazabilidad de propiedades
 * @returns {Promise<PropertyTrace[]>} Lista de registros de trazabilidad
 * @throws {Error} Error si la petición falla
 * @example
 * ```ts
 * const traces = await getAllTraces();
 * console.log(traces); // [{ idPropertyTrace: "1", idProperty: "123", ... }]
 * ```
 */
export const getAllTraces = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

/**
 * Crea un nuevo registro de trazabilidad para una propiedad
 * @param {Object} property - Datos de la transacción
 * @param {string} property.idProperty - ID de la propiedad
 * @param {string} property.dateSale - Fecha de la transacción
 * @param {string} property.name - Nombre del comprador
 * @param {number} property.value - Valor de la transacción
 * @param {number} property.tax - Impuestos aplicados
 * @returns {Promise<PropertyTrace>} Registro de trazabilidad creado
 * @throws {Error} Error si la creación falla
 * @example
 * ```ts
 * const newTrace = await createProperty({
 *   idProperty: "123",
 *   dateSale: "2024-03-20",
 *   name: "Juan Pérez",
 *   value: 150000,
 *   tax: 15000
 * });
 * ```
 */
export const createProperty = async (property: any) => {
  const response = await axios.post(API_URL, property);
  return response.data;
};

/**
 * Obtiene una lista de nombres de propiedades con trazabilidad
 * Útil para llenar dropdowns o listas de selección
 * @returns {Promise<string[]>} Array con los nombres de las propiedades
 * @throws {Error} Error si la petición falla
 * @example
 * ```ts
 * const propertyNames = await getPropertyNames();
 * console.log(propertyNames); // ["Casa A", "Apartamento B", ...]
 * ```
 */
export const getPropertyNames = async (): Promise<string[]> => {
  const response = await axios.get(`${API_URL}/names`);
  return response.data;
};
