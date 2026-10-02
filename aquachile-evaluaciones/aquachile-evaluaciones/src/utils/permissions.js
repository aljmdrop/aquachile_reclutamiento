import { ROLES } from '../data/users.js'

// Matriz de acciones por rol (sección 3 del documento MVP).
const MATRIX = {
  'candidate:write': [ROLES.ANALISTA, ROLES.ADMIN],
  'request:create': [ROLES.ANALISTA, ROLES.ADMIN],
  'request:assign': [ROLES.ANALISTA, ROLES.ADMIN],
  'evaluation:write': [ROLES.EVALUADOR, ROLES.ADMIN],
  'admin:manage': [ROLES.ADMIN],
}

export function can(role, action) {
  if (!action) return true
  return (MATRIX[action] ?? []).includes(role)
}

// El evaluador solo ve las solicitudes que tiene asignadas; el resto ve todas.
export function filterRequestsForUser(user, requests) {
  if (!user) return []
  if (user.rol === ROLES.EVALUADOR) {
    return requests.filter((r) => r.responsableId === user.id)
  }
  return requests
}

// Ítems del menú lateral con la acción que exige cada uno.
export const NAV_ITEMS = [
  { to: '/', label: 'Resumen', end: true },
  { to: '/candidatos', label: 'Candidatos' },
  { to: '/solicitudes', label: 'Solicitudes' },
  { to: '/admin', label: 'Catálogos y usuarios', action: 'admin:manage' },
]
