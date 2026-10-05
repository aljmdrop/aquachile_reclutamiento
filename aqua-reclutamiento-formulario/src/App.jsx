import { useState, useRef } from 'react';

const FAMILIAS_CARGO = [
  'Operaciones y Logística',
  'Administración y Finanzas',
  'Comercial y Ventas',
  'Tecnología e Informática',
  'Jefaturas y Gerencia',
];

const INITIAL_FORM_STATE = {
  candidateName: '',
  jobFamily: '',
  jobTitle: '',
  cvFile: null,
};

export default function App() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const fileInputRef = useRef(null);

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

    if (!formData.cvFile) {
      setMessage({ type: 'error', text: 'Por favor, adjunta el CV del candidato.' });
      return;
    }

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

      setFormData(INITIAL_FORM_STATE);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
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
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Solicitud de Evaluación Psicolaboral
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center leading-relaxed">
          Ingresa los antecedentes del candidato para generar el entorno y las plantillas automáticas.
        </p>

        {message && (
          <div
            className={`p-3 rounded-lg mb-5 text-sm font-medium ${
              message.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Nombre Completo del Candidato:
            </label>
            <input
              type="text"
              name="candidateName"
              required
              placeholder="Ej: Juan Pérez Martínez"
              value={formData.candidateName}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Familia de Cargo:
            </label>
            <select
              name="jobFamily"
              required
              value={formData.jobFamily}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            >
              <option value="" disabled className="text-gray-400">
                Selecciona una familia de cargo
              </option>
              {FAMILIAS_CARGO.map((family) => (
                <option key={family} value={family} className="text-gray-900 bg-white">
                  {family}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Nombre del Cargo:
            </label>
            <input
              type="text"
              name="jobTitle"
              required
              placeholder="Ej: Analista de Procesos"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Curriculum Vitae (PDF o Word):
            </label>
            <input
              ref={fileInputRef}
              type="file"
              name="cvFile"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
          >
            {loading ? 'Creando expediente y carpetas...' : 'Iniciar Evaluación'}
          </button>
        </form>
      </div>
    </div>
  );
}