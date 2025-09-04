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

### Instalar dependencias

```bash
npm i
```

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
