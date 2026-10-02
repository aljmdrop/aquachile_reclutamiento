const statusClasses = {
  Pendiente: 'status-pending',
  'En proceso': 'status-progress',
  Finalizada: 'status-finished',
}

function StatusBadge({ status }) {
  return <span className={`status-badge ${statusClasses[status] ?? ''}`}>{status}</span>
}

export default StatusBadge