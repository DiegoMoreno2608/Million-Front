/**
 * @fileoverview Definición de tipos para el modelo de propiedades inmobiliarias
 * @author Sistema Inmobiliario
 * @version 1.0.0
 */

/**
 * Representa una propiedad inmobiliaria en el sistema
 * @interface Property
 */
export interface Property {
  /** Identificador único de la propiedad */
  idProperty: string;
  
  /** Nombre descriptivo de la propiedad */
  name: string;
  
  /** Dirección física completa de la propiedad */
  address: string;
  
  /** Precio de la propiedad en la moneda local */
  price: number;
  
  /** Código interno único para identificación interna */
  codeInternal: string;
  
  /** Año de construcción de la propiedad */
  year: number;
  
  /** Identificador del propietario asociado */
  idOwner: string;
  
  /** URL del archivo o imagen principal de la propiedad */
  fileUrl: string;
}