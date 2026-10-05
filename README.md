# AquaChile · Gestión de Evaluaciones Psicolaborales

Proyecto de Vinculación con el Medio (VcM) de **Desarrollo Fullstack II (DSY1104)**, Duoc UC. MVP web para centralizar candidatos, solicitudes y evaluaciones psicolaborales del área de Reclutamiento y Selección de AquaChile.

> **Estado actual:** Etapa 1 (frontend y prototipo funcional). El frontend usa **datos simulados**; el backend y la base de datos son una etapa posterior.

## Integrantes

- Renato Uribe
- Daniel Villamizar
- Abraham Vivas

## Estructura del repositorio

```
aquachile_reclutamiento/
├── frontend/
│   ├── formulario/    # Proyecto independiente: formulario de solicitud
│   └── dashboard/     # Proyecto independiente: panel de gestión
└── README.md
```

Dentro de `frontend/` hay **dos proyectos independientes**. Cada uno tiene su propio `package.json`, sus dependencias y su propio servidor de desarrollo, por lo que se instalan y se ejecutan por separado.

| Proyecto | Descripción | Tecnologías |
|---|---|---|
| `frontend/formulario` | Formulario de solicitud de evaluación psicolaboral | React 19, Vite 8, ESLint |
| `frontend/dashboard` | Panel de gestión de solicitudes | React 19, Vite 8, React Router 7, Tailwind CSS 4, oxlint |

## frontend/formulario

Formulario para solicitar una evaluación psicolaboral. Campos: nombre completo del candidato, familia de cargo, nombre del cargo y CV (PDF o Word). Muestra mensajes de éxito o error y bloquea el botón mientras envía.

```
formulario/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
├── README.md
├── public/
└── src/
    ├── main.jsx      # Punto de entrada
    ├── App.jsx       # Componente del formulario (estado, validación y envío)
    ├── index.css     # Estilos
    └── assets/       # Recursos estáticos
```

Al enviar, hace un `POST` a `/api/evaluaciones/iniciar` con los datos como `multipart/form-data`. Ese endpoint aún no existe, por lo que hoy el envío muestra el mensaje de error.

```bash
cd frontend/formulario
npm install
npm run dev
```

## frontend/dashboard

Panel de gestión con indicadores y tabla de solicitudes recientes.

```
dashboard/
├── index.html
├── package.json
├── vite.config.js
├── .oxlintrc.json
├── public/
└── src/
    ├── main.jsx                 # Punto de entrada (BrowserRouter)
    ├── App.jsx                  # Rutas y vista del dashboard
    ├── index.css / App.css      # Estilos globales y del dashboard
    ├── components/
    │   └── StatusBadge.jsx      # Etiqueta de estado de la solicitud
    └── services/
        ├── api.js               # Acceso a datos (hoy devuelve datos simulados)
        └── mockData.js          # Candidatos y solicitudes de ejemplo
```

| Ruta | Vista | Descripción |
|---|---|---|
| `/` | Dashboard | Indicadores (total de candidatos y solicitudes pendientes, en proceso y finalizadas). Al hacer clic en un indicador se filtra la tabla por estado. |
| `/solicitudes/:id` | Detalle de solicitud | Vista provisoria; se completará en una siguiente fase. |

Cualquier otra ruta redirige al dashboard. Los datos salen de `src/services/mockData.js` a través de `api.js`; cuando exista el backend, basta con reemplazar las funciones de `api.js` por llamadas HTTP.

```bash
cd frontend/dashboard
npm install
npm run dev
```

## Ejecutar ambos proyectos a la vez

Los dos usan Vite, cuyo puerto por defecto es `5173`. Si abres el segundo mientras el primero está corriendo, Vite elige automáticamente el siguiente puerto libre (`5174`) y lo muestra en la terminal.

Comandos disponibles en ambos proyectos:

```bash
npm run build    # versión de producción en dist/
npm run preview  # sirve el build localmente
npm run lint     # análisis del código
```

Requisito: Node.js 18 o superior.

## Estados de una solicitud

`Pendiente` → `En proceso` → `Finalizada`

## Pendientes

- Backend monolítico (Node.js) y base de datos (MySQL).
- Conectar dashboard y formulario a la API y definir el endpoint definitivo del formulario.
- Migrar los estilos del formulario a Bootstrap 5 o Tailwind CSS (requisito de la rúbrica) para el diseño responsivo.
- Unificar las familias de cargo del formulario con las del Excel de AquaChile.
- Evaluar unir formulario y dashboard en una sola aplicación (hoy son proyectos independientes).
- Vista de detalle de solicitud y sección para registrar la evaluación.
- Pruebas unitarias con Jasmine y Karma, y documento de cobertura.
- Despliegue con herramientas gratuitas.
