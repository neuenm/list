# List Test - Aplicación de Gestión de Listas

Una aplicación React moderna para la gestión de listas con funcionalidades de selección múltiple, historial de cambios (undo/redo) y una interfaz intuitiva.

## 🚀 Características

- ✅ **Gestión de Listas**: Agregar y eliminar elementos de una lista
- 🎯 **Selección Múltiple**: Seleccionar elementos con un clic
- 🗑️ **Eliminación Rápida**: Eliminar elementos con doble clic
- ↩️ **Historial de Cambios**: Funcionalidad de deshacer (undo) y rehacer (redo)
- 🎨 **Interfaz Moderna**: Diseño responsive con Tailwind CSS
- 📱 **Responsive**: Optimizado para dispositivos móviles y desktop
- 🧪 **Testing**: Configurado con Vitest y Testing Library

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19.1.1** - Biblioteca de interfaz de usuario
- **TypeScript 5.9.2** - Tipado estático
- **Vite 7.1.2** - Herramienta de construcción y desarrollo
- **Tailwind CSS 4.1.12** - Framework de CSS utilitario

### Testing

- **Vitest 3.2.4** - Framework de testing
- **Testing Library** - Utilidades para testing de componentes React
- **Jest DOM** - Matchers personalizados para DOM

### Herramientas de Desarrollo

- **ESLint 9.33.0** - Linter de código
- **PostCSS 8.5.6** - Procesador de CSS
- **Autoprefixer 10.4.21** - Agregado automático de prefijos CSS

## 📦 Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd list-test
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

## 🚀 Cómo Ejecutar

### Desarrollo

```bash
npm run dev
```

La aplicación se ejecutará en `http://localhost:5173`

### Construcción para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Vista Previa de Producción

```bash
npm run preview
```

Sirve la versión construida localmente

### Testing

```bash
# Ejecutar tests en modo watch
npm run test

# Ejecutar tests una sola vez
npm run test:run
```

### Linting

```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Button.tsx      # Componente de botón
│   ├── Dialog.tsx      # Modal/diálogo
│   ├── EmptyList.tsx   # Estado vacío de lista
│   ├── Icon.tsx        # Componente de iconos
│   ├── ListItem.tsx    # Elemento individual de lista
│   └── index.ts        # Exportaciones de componentes
├── __tests__/          # Tests
│   └── App.test.tsx    # Tests del componente principal
├── App.tsx             # Componente principal
├── App.css             # Estilos del componente principal
├── main.tsx            # Punto de entrada de la aplicación
├── index.css           # Estilos globales
└── setupTests.ts       # Configuración de tests
```

## 🎮 Uso de la Aplicación

1. **Agregar Elementos**: Haz clic en el botón "ADD" para abrir el diálogo y agregar nuevos elementos
2. **Seleccionar Elementos**: Haz clic en cualquier elemento para seleccionarlo/deseleccionarlo
3. **Eliminar Elementos**:
   - Selecciona uno o más elementos y haz clic en "DELETE"
   - O haz doble clic en un elemento para eliminarlo directamente
4. **Deshacer/Rehacer**: Usa los botones de flecha para deshacer o rehacer cambios

## 🧪 Testing

El proyecto incluye tests unitarios para los componentes principales:

```bash
# Ejecutar todos los tests
npm run test

# Ejecutar tests en modo watch
npm run test:run
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la construcción de producción
- `npm run test` - Ejecuta tests en modo watch
- `npm run test:run` - Ejecuta tests una sola vez
- `npm run lint` - Ejecuta el linter de código

## 🔧 Configuración

### Vite

Configurado con React plugin y soporte para testing con Vitest.

### Tailwind CSS

Configurado con PostCSS y Autoprefixer para compatibilidad cross-browser.

### ESLint

Configurado con reglas para React y TypeScript.

## 📄 Licencia

Este proyecto es privado y está destinado para uso interno.
