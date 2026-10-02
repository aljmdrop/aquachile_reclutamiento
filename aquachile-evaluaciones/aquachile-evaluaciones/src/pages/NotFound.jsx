import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader.jsx'

export default function NotFound() {
  return (
    <>
      <PageHeader title="No encontramos esta página" description="La dirección no existe o fue movida." />
      <Link to="/" className="text-sm font-medium text-salmon-600 underline">Volver al resumen</Link>
    </>
  )
}
