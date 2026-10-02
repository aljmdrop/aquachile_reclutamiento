import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { users, ROLE_LABELS } from '../data/users.js'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()

  if (user) return <Navigate to="/" replace />

  const enter = (id) => {
    if (login(id)) navigate('/')
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Evaluaciones psicolaborales</h1>
      <p className="mt-2 text-sm text-fiordo-700">
        Prototipo académico con datos ficticios. Elige un usuario de prueba para entrar con su rol.
      </p>

      <ul className="mt-8 divide-y divide-fiordo-100 overflow-hidden rounded-lg border border-fiordo-100 bg-white">
        {users.map((u) => (
          <li key={u.id}>
            <button
              type="button"
              onClick={() => enter(u.id)}
              className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left hover:bg-fiordo-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-salmon-500"
            >
              <span>
                <span className="block text-sm font-medium">{u.nombre}</span>
                <span className="block text-xs text-fiordo-700">{ROLE_LABELS[u.rol]}</span>
              </span>
              <span className="text-sm font-medium text-salmon-600">Entrar</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
