import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import { ROLE_LABELS } from '../../data/users.js'
import { NAV_ITEMS, can } from '../../utils/permissions.js'

export default function Sidebar({ onNavigate }) {
  const { user, logout } = useAuth()
  const items = NAV_ITEMS.filter((item) => can(user.rol, item.action))

  return (
    <div className="flex h-full flex-col bg-fiordo-900 text-fiordo-100">
      <div className="px-5 py-6">
        <p className="text-lg font-semibold tracking-tight text-white">AquaChile</p>
        <p className="text-xs text-fiordo-300">Evaluaciones psicolaborales</p>
      </div>

      <nav className="flex-1 space-y-1 px-3" aria-label="Principal">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              'block rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-salmon-500 ' +
              (isActive
                ? 'bg-fiordo-700 text-white'
                : 'text-fiordo-100 hover:bg-fiordo-800')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-fiordo-800 px-5 py-4">
        <p className="text-sm font-medium text-white">{user.nombre}</p>
        <p className="text-xs text-fiordo-300">{ROLE_LABELS[user.rol]}</p>
        <button
          type="button"
          onClick={logout}
          className="mt-3 text-sm font-medium text-salmon-500 hover:text-salmon-100 focus-visible:outline-2 focus-visible:outline-salmon-500"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
