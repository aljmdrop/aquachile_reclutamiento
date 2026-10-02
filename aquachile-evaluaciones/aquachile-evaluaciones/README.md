# AquaChile · Evaluaciones psicolaborales (MVP académico)

Frontend React + Vite + Tailwind CSS. Datos ficticios. Fase 1, paso 1.

## Comandos
```bash
npm install
npm run dev     # servidor de desarrollo
npm run build   # compilación de producción
npm test        # Karma + Jasmine (requiere Google Chrome instalado)
```

## Estructura
```
src/
├── components/   layout/ ui/ candidates/ requests/ evaluations/
├── pages/        una por vista (Login, Dashboard, Candidates, ...)
├── context/      AuthContext (login simulado por rol)
├── routes/       ProtectedRoute (sesión + permiso por acción)
├── services/     mockApi.js (se reemplaza por la API en Fase 2)
├── data/         users.js, catalogs.js (datos ficticios)
└── utils/        permissions.js (+ permissions.spec.js)
```

## Rutas
| Ruta | Acción requerida |
|---|---|
| /login | pública |
| / , /candidatos, /solicitudes, /solicitudes/:id | sesión |
| /candidatos/nuevo, /candidatos/:id/editar | candidate:write |
| /solicitudes/nueva | request:create |
| /admin | admin:manage |
