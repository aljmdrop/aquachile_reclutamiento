import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Candidates from './pages/Candidates.jsx'
import CandidateForm from './pages/CandidateForm.jsx'
import Requests from './pages/Requests.jsx'
import RequestForm from './pages/RequestForm.jsx'
import RequestDetail from './pages/RequestDetail.jsx'
import Admin from './pages/Admin.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="candidatos" element={<Candidates />} />
        <Route
          path="candidatos/nuevo"
          element={<ProtectedRoute action="candidate:write"><CandidateForm /></ProtectedRoute>}
        />
        <Route
          path="candidatos/:id/editar"
          element={<ProtectedRoute action="candidate:write"><CandidateForm /></ProtectedRoute>}
        />
        <Route path="solicitudes" element={<Requests />} />
        <Route
          path="solicitudes/nueva"
          element={<ProtectedRoute action="request:create"><RequestForm /></ProtectedRoute>}
        />
        <Route path="solicitudes/:id" element={<RequestDetail />} />
        <Route
          path="admin"
          element={<ProtectedRoute action="admin:manage"><Admin /></ProtectedRoute>}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
