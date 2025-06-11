/**
 * @fileoverview Definición de tipos para el historial de transacciones de propiedades
 * @author Sistema Inmobiliario  
 * @version 1.0.0
 */

/**
 * Representa un registro de transacción/trazabilidad de una propiedad
 * Permite hacer seguimiento del historial de ventas y cambios de propiedad
 * @interface PropertyTrace
 */
export interface PropertyTrace {
  idProperty: string;
  idPropertyTrace: string;
  name: string;
  value: number;
  tax: number;
  dateSale: string;
}
