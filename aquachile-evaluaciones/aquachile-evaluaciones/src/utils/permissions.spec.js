import { can, filterRequestsForUser } from './permissions.js'
import { users, ROLES } from '../data/users.js'

describe('permissions.can', () => {
  it('permite al analista crear candidatos y solicitudes', () => {
    expect(can(ROLES.ANALISTA, 'candidate:write')).toBeTrue()
    expect(can(ROLES.ANALISTA, 'request:create')).toBeTrue()
  })

  it('no permite al analista registrar evaluaciones', () => {
    expect(can(ROLES.ANALISTA, 'evaluation:write')).toBeFalse()
  })

  it('permite al evaluador registrar evaluaciones pero no crear candidatos', () => {
    expect(can(ROLES.EVALUADOR, 'evaluation:write')).toBeTrue()
    expect(can(ROLES.EVALUADOR, 'candidate:write')).toBeFalse()
  })

  it('deja a jefatura en solo lectura', () => {
    ['candidate:write', 'request:create', 'evaluation:write', 'admin:manage'].forEach((a) => {
      expect(can(ROLES.JEFATURA, a)).toBeFalse()
    })
  })

  it('permite acciones no restringidas (sin action) a cualquier rol', () => {
    expect(can(ROLES.JEFATURA, undefined)).toBeTrue()
  })
})

describe('permissions.filterRequestsForUser', () => {
  const requests = [
    { id: 'r1', responsableId: 'u2' },
    { id: 'r2', responsableId: 'u3' },
    { id: 'r3', responsableId: 'u2' },
  ]
  const evaluador = users.find((u) => u.id === 'u2')
  const analista = users.find((u) => u.rol === ROLES.ANALISTA)

  it('el evaluador solo ve sus solicitudes asignadas', () => {
    expect(filterRequestsForUser(evaluador, requests).map((r) => r.id)).toEqual(['r1', 'r3'])
  })

  it('el analista ve todas las solicitudes', () => {
    expect(filterRequestsForUser(analista, requests).length).toBe(3)
  })

  it('sin usuario no devuelve solicitudes', () => {
    expect(filterRequestsForUser(null, requests)).toEqual([])
  })
})
