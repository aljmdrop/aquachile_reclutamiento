import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader.jsx'

export default function Forbidden() {
  return (
    <>
      <PageHeader title="No tienes permiso para esta acción" description="Tu rol actual no incluye esta sección. Vuelve al resumen o entra con otro usuario de prueba." />
      <Link to="/" className="text-sm font-medium text-salmon-600 underline">Volver al resumen</Link>
    </>
  )
}
