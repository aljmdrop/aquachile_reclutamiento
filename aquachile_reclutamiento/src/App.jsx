import { useState } from 'react'
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { getCandidates, getRequests } from './services/api.js'
import StatusBadge from './components/StatusBadge.jsx'
import './App.css'

const dateFormatter = new Intl.DateTimeFormat('es-CL', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

function MetricCard({ label, value, detail, tone, active, onClick }) {
  return (
    <button
      type="button"
      className="metric-card"
      aria-pressed={active}
      onClick={onClick}
    >
      <div className={`metric-mark ${tone}`} aria-hidden="true" />
      <p className="metric-label">{label}</p>
      <div className="metric-bottom">
        <strong className="metric-value">{value}</strong>
        <span className="metric-detail">{detail}</span>
      </div>
    </button>
  )
}

function Dashboard() {
  const [statusFilter, setStatusFilter] = useState('Todos')
  const requests = getRequests()
  const candidates = getCandidates()
  const candidateById = Object.fromEntries(
    candidates.map((candidate) => [candidate.id, candidate]),
  )
  const pendingCount = requests.filter(
    (request) => request.status === 'Pendiente',
  ).length
  const inProgressCount = requests.filter(
    (request) => request.status === 'En proceso',
  ).length
  const finishedCount = requests.filter(
    (request) => request.status === 'Finalizada',
  ).length
  const filteredRequests =
    statusFilter === 'Todos'
      ? requests
      : requests.filter((request) => request.status === statusFilter)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="brand" to="/" aria-label="AquaChile Selección, inicio">
          <span className="brand-symbol" aria-hidden="true">A</span>
          <span className="brand-name">AquaChile<span>Reclutamiento</span></span>
        </Link>
        <div className="sidebar-caption">GESTIÓN</div>
        <nav aria-label="Navegación principal">
          <Link className="nav-link nav-link-active" to="/">
            <span className="nav-indicator" aria-hidden="true" />
            Panel principal
          </Link>
        </nav>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb"><strong>Dashboard</strong></div>
        </header>

        <div className="dashboard-content">
          <section className="page-heading">
            <div>
              <p className="eyebrow">RECLUTAMIENTO Y SELECCIÓN</p>
              <h1>Panel de gestión</h1>
            </div>
          </section>

          <section className="metrics-grid" aria-label="Indicadores">
            <MetricCard
              label="Total de candidatos"
              value={candidates.length}
              detail="registrados"
              tone="teal"
              active={statusFilter === 'Todos'}
              onClick={() => setStatusFilter('Todos')}
            />
            <MetricCard
              label="Solicitudes pendientes"
              value={pendingCount}
              detail="por iniciar"
              tone="amber"
              active={statusFilter === 'Pendiente'}
              onClick={() => setStatusFilter('Pendiente')}
            />
            <MetricCard
              label="Solicitudes en proceso"
              value={inProgressCount}
              detail="en evaluación"
              tone="blue"
              active={statusFilter === 'En proceso'}
              onClick={() => setStatusFilter('En proceso')}
            />
            <MetricCard
              label="Evaluaciones finalizadas"
              value={finishedCount}
              detail="completadas"
              tone="coral"
              active={statusFilter === 'Finalizada'}
              onClick={() => setStatusFilter('Finalizada')}
            />
          </section>

          <section className="requests-section" aria-labelledby="requests-title">
            <div className="section-heading">
              <div>
                <div className="section-title-line">
                  <h2 id="requests-title">Solicitudes recientes</h2>
                  <span className="result-count">{filteredRequests.length}</span>
                </div>
              </div>
              <p className="requests-note">
                <span className="warning-icon" aria-hidden="true">⚠</span>
                Revisa el estado de las evaluaciones solicitadas.
              </p>
            </div>

            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Candidato</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Familia de cargo</th>
                    <th scope="col">Responsable</th>
                    <th scope="col">Fecha de solicitud</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRequests.map((request) => (
                    <tr key={request.id}>
                      <td>
                        <Link className="candidate-link" to={`/solicitudes/${request.id}`}>
                          {candidateById[request.candidateId]?.name ?? 'Candidato'}
                        </Link>
                      </td>
                      <td>{request.jobTitle}</td>
                      <td><span className="family-name">{request.jobFamily}</span></td>
                      <td>{request.owner}</td>
                      <td className="date-cell">{dateFormatter.format(new Date(`${request.requestedAt}T12:00:00`))}</td>
                      <td><StatusBadge status={request.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredRequests.length === 0 && <p className="empty-state">No hay solicitudes para este estado.</p>}
            </div>
            <footer className="table-footer">Mostrando {filteredRequests.length} de {requests.length} solicitudes</footer>
          </section>
          <footer className="page-footer">AquaChile <span>·</span> Gestión de evaluaciones psicolaborales</footer>
        </div>
      </main>
    </div>
  )
}

function RequestPlaceholder() {
  const { id } = useParams()

  return (
    <main className="placeholder-page mx-auto max-w-3xl px-8 py-16">
      <Link to="/" className="back-link">← Volver al dashboard</Link>
      <p className="eyebrow">SOLICITUD {id}</p>
      <h1>Detalle de solicitud</h1>
      <p className="page-description">Esta vista estará disponible en una siguiente fase.</p>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/solicitudes/:id" element={<RequestPlaceholder />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
