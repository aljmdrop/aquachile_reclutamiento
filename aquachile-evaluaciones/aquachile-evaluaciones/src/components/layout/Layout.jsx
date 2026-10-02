import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'

// Escritorio: menú fijo a la izquierda. Móvil: barra superior + menú desplegable.
export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[16rem_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>
      </aside>

      <header className="flex items-center justify-between bg-fiordo-900 px-4 py-3 text-white lg:hidden">
        <p className="font-semibold">AquaChile</p>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-fiordo-800 focus-visible:outline-2 focus-visible:outline-salmon-500"
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </header>

      {open && (
        <div id="menu-movil" className="lg:hidden">
          <Sidebar onNavigate={() => setOpen(false)} />
        </div>
      )}

      <main className="min-w-0 px-4 py-6 sm:px-8 lg:py-10">
        <div className="mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
