import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { can } from '../utils/permissions.js'
import Forbidden from '../pages/Forbidden.jsx'

// Sin sesión → /login. Con sesión pero sin permiso para `action` → aviso claro.
export default function ProtectedRoute({ action, children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (!can(user.rol, action)) return <Forbidden />
  return children
}
