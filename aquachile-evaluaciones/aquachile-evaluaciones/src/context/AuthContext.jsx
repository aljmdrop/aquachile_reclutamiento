import { createContext, useContext, useState } from 'react'
import { users } from '../data/users.js'

const AuthContext = createContext(null)
const KEY = 'aquachile.userId'

function readStoredUser() {
  try {
    const id = localStorage.getItem(KEY)
    return users.find((u) => u.id === id) ?? null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser)

  const login = (userId) => {
    const found = users.find((u) => u.id === userId)
    if (!found) return false
    setUser(found)
    try { localStorage.setItem(KEY, found.id) } catch { /* sin storage */ }
    return true
  }

  const logout = () => {
    setUser(null)
    try { localStorage.removeItem(KEY) } catch { /* sin storage */ }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>')
  return ctx
}
