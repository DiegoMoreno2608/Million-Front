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
  /** Identificador único del registro de trazabilidad */
  idPropertyTrace: string;
  
  /** Identificador de la propiedad asociada */
  idProperty: string;
  
  /** Fecha de la transacción en formato ISO string */
  dateSale: string;
  
  /** Nombre del comprador o nuevo propietario */
  name: string;
  
  /** Valor de la transacción */
  value: number;
  
  /** Impuestos aplicados a la transacción */
  tax: number;
}
