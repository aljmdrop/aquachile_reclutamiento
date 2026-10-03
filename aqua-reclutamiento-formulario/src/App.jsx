import { useState } from 'react';
import './App.css';

export default function SolicitudEvaluacionForm() {
  const [formData, setFormData] = useState({
    candidateName: '',
    jobFamily: '',
    jobTitle: '',
    cvFile: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const FAMILIAS_CARGO = [
    'Operaciones y Logística',
    'Administración y Finanzas',
    'Comercial y Ventas',
    'Tecnología e Informática',
    'Jefaturas y Gerencia',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, cvFile: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const payload = new FormData();
    payload.append('candidateName', formData.candidateName);
    payload.append('jobFamily', formData.jobFamily);
    payload.append('jobTitle', formData.jobTitle);
    payload.append('cv', formData.cvFile);

    try {
      const response = await fetch('/api/evaluaciones/iniciar', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) throw new Error('Error al procesar la solicitud');

      setMessage({
        type: 'success',
        text: 'Solicitud enviada correctamente. Se ha creado la carpeta y las plantillas asociadas.',
      });

      setFormData({
        candidateName: '',
        jobFamily: '',
        jobTitle: '',
        cvFile: null,
      });
      e.target.reset();
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Ocurrió un error al enviar la evaluación. Intenta nuevamente.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Solicitud de Evaluación Psicolaboral</h2>
      <p className="form-subtitle">
        Ingresa los antecedentes del candidato para generar el entorno y las plantillas automáticas.
      </p>

      {message && (
        <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="evaluation-form">
        {/* Nombre del Candidato */}
        <div className="field-group">
          <label className="field-label">Nombre Completo del Candidato:</label>
          <input
            type="text"
            name="candidateName"
            required
            placeholder="Ej: Juan Pérez Martínez"
            value={formData.candidateName}
            onChange={handleInputChange}
            className="field-input"
          />
        </div>

        {/* Familia de Cargo */}
        <div className="field-group">
          <label className="field-label">Familia de Cargo:</label>
          <select
            name="jobFamily"
            required
            value={formData.jobFamily}
            onChange={handleInputChange}
            className="field-select"
          >
            <option value="" disabled>
              Selecciona una familia de cargo
            </option>
            {FAMILIAS_CARGO.map((family) => (
              <option key={family} value={family}>
                {family}
              </option>
            ))}
          </select>
        </div>

        {/* Nombre del Cargo */}
        <div className="field-group">
          <label className="field-label">Nombre del Cargo:</label>
          <input
            type="text"
            name="jobTitle"
            required
            placeholder="Ej: Analista de Procesos"
            value={formData.jobTitle}
            onChange={handleInputChange}
            className="field-input"
          />
        </div>

        {/* Carga del CV */}
        <div className="field-group">
          <label className="field-label">Curriculum Vitae (PDF o Word):</label>
          <input
            type="file"
            name="cvFile"
            required
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="file-input"
          />
        </div>

        {/* Botón de Envío */}
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Creando expediente y carpetas...' : 'Iniciar Evaluación'}
        </button>
      </form>
    </div>
  );
}