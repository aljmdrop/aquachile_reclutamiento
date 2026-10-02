/**
 * ============================================================================
 * EJERCICIO 5: Renderizar listas dinámicas con .map() y key
 * ============================================================================
 * 
 * 🎯 OBJETIVO:
 * Transformar un arreglo de datos (array) en elementos JSX utilizando `.map()`.
 * 
 * 📝 ENUNCIADO:
 * 1. Usa el arreglo `estudiantes` proporcionado más abajo.
 * 2. Crea y exporta por defecto el componente `Ejercicio5`.
 * 3. Utiliza el método `.map()` sobre `estudiantes` para renderizar cada elemento en la interfaz.
 * 4. Muestra el nombre y la carrera de cada estudiante (por ejemplo en una lista <ul> con <li> o con tarjetas).
 * 5. Recuerda agregar la propiedad `key` obligatoria a cada elemento de la lista.
 * 
 * 💡 PISTAS:
 * - Estructura básica de .map():
 *   {estudiantes.map((estudiante) => (
 *     <li key={estudiante.id}>
 *       {estudiante.nombre} - {estudiante.carrera}
 *     </li>
 *   ))}
 * - La prop `key` SIEMPRE debe ir en la etiqueta más externa que retorne el `.map()`.
 */

const estudiantes = [
  { id: 1, nombre: "Alexis Mansilla", carrera: "Informática" },
  { id: 2, nombre: "Valeria Soto", carrera: "Diseño Gráfico" },
  { id: 3, nombre: "Matías Rojas", carrera: "Redes y Telecomunicaciones" }
];

// 👇 Escribe tu código a partir de aquí:

export default function Ejercicio5() {
  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <ul>
        {estudiantes.map((estudiante) => (
          <li key={estudiante.id}>
            <strong>{estudiante.nombre}</strong> - {estudiante.carrera}
          </li>
        ))}
      </ul>
    </div>
  );
}