# Sistema de Gestión Inmobiliaria

## 📋 Descripción

Sistema web para la gestión de propiedades inmobiliarias que permite administrar propietarios, propiedades y realizar seguimiento completo de transacciones.

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/           # Componentes reutilizables de UI
│   ├── HeaderAdmin.tsx   # Header del panel de administración
│   └── FooterAdmin.tsx   # Footer del panel de administración
├── layouts/              # Layouts de página
│   └── AdminLayout.tsx   # Layout principal con header/footer
├── pages/                # Páginas principales de la aplicación
│   ├── HomePage.tsx      # Dashboard principal
│   ├── OwnersPage.tsx    # Gestión de propietarios
│   ├── PropertiesPage.tsx # Listado de propiedades
│   ├── CreatePropertyPage.tsx # Crear nueva propiedad
│   └── PropertyTracePage.tsx  # Trazabilidad de propiedades
├── services/             # Servicios de API
│   ├── ownerService.ts   # Operaciones CRUD de propietarios
│   ├── propertyService.ts # Operaciones CRUD de propiedades
│   └── propertyTraceService.ts # Gestión de trazabilidad
├── types/                # Definiciones de tipos TypeScript
│   ├── Property.ts       # Modelo de datos de propiedades
│   └── PropertyTrace.ts  # Modelo de historial de transacciones
├── App.tsx              # Componente principal con rutas
└── main.tsx             # Punto de entrada de la aplicación
```

## 🚀 Tecnologías Utilizadas

- **React 18** - Framework de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **React Router** - Enrutamiento del lado del cliente
- **Tailwind CSS** - Framework de estilos utilitarios
- **Axios** - Cliente HTTP para APIs
- **Vite** - Herramienta de construcción y desarrollo

## 📚 Documentación JSDoc

El proyecto está completamente documentado usando JSDoc para:

### Componentes Principales
- **AdminLayout**: Layout base con header, footer y área de contenido
- **HeaderAdmin**: Navegación principal con menús responsive
- **FooterAdmin**: Footer institucional con enlaces y información

### Servicios de API
- **propertyService**: Gestión de propiedades (CRUD, filtros, búsquedas)
- **ownerService**: Gestión de propietarios (creación, listado)
- **propertyTraceService**: Trazabilidad de transacciones

### Modelos de Datos
- **Property**: Estructura de datos para propiedades inmobiliarias
- **PropertyTrace**: Historial de transacciones y cambios de propiedad

## 🔧 Configuración de Desarrollo

### Prerequisitos
- Node.js 16+
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construcción para producción
npm run preview      # Vista previa de la construcción
npm run lint         # Análisis de código
```

## 🌐 API Backend

El frontend se conecta a una API REST en `https://localhost:44357/api/` con los siguientes endpoints:

- `GET/POST /Properties` - Gestión de propiedades
- `GET/POST /Owners` - Gestión de propietarios
- `GET/POST /PropertyTrace` - Trazabilidad de transacciones

## 📱 Características del Sistema

### Panel de Administración
- ✅ Dashboard con métricas principales
- ✅ Gestión completa de propietarios
- ✅ CRUD de propiedades con filtros
- ✅ Sistema de trazabilidad de transacciones
- ✅ Interfaz responsive para móviles y desktop

### Componentes de UI
- ✅ Layout consistente en todas las páginas
- ✅ Navegación con estados activos
- ✅ Formularios con validación
- ✅ Tablas con paginación y filtros
- ✅ Componentes reutilizables y modulares

## 🔒 Consideraciones de Seguridad

- Validación de tipos con TypeScript
- Sanitización de entradas de usuario
- Manejo seguro de archivos subidos
- Headers de seguridad configurados

## 📈 Roadmap Futuro

- [ ] Autenticación y autorización
- [ ] Dashboard con gráficos y estadísticas
- [ ] Sistema de notificaciones
- [ ] Exportación de reportes
- [ ] API de búsqueda avanzada
- [ ] Modo oscuro/claro

---

**Versión:** 1.0.0  
**Última actualización:** ${new Date().toLocaleDateString()}  
**Desarrollado por:** Sistema Inmobiliario
# Million-Front
