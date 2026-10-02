// Usuarios FICTICIOS para el login simulado (RF01).
export const ROLES = {
  ANALISTA: 'analista',
  EVALUADOR: 'evaluador',
  ADMIN: 'admin',
  JEFATURA: 'jefatura',
}

export const ROLE_LABELS = {
  analista: 'Analista de Reclutamiento',
  evaluador: 'Profesional Evaluador',
  admin: 'Administrador académico',
  jefatura: 'Jefatura (solo lectura)',
}

export const users = [
  { id: 'u1', nombre: 'Camila Rojas', correo: 'camila.rojas@ejemplo.cl', rol: ROLES.ANALISTA },
  { id: 'u2', nombre: 'Andrés Soto', correo: 'andres.soto@ejemplo.cl', rol: ROLES.EVALUADOR },
  { id: 'u3', nombre: 'Marta Vidal', correo: 'marta.vidal@ejemplo.cl', rol: ROLES.EVALUADOR },
  { id: 'u4', nombre: 'Admin Demo', correo: 'admin@ejemplo.cl', rol: ROLES.ADMIN },
  { id: 'u5', nombre: 'Jorge Pino', correo: 'jorge.pino@ejemplo.cl', rol: ROLES.JEFATURA },
]
