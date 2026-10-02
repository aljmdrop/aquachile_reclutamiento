/**
 * ============================================================================
 * EJERCICIO 3: Pasar información mediante Props
 * ============================================================================
 *
 * 🎯 OBJETIVO:
 * Aprender a hacer que los componentes sean dinámicos recibiendo parámetros (props).
 *
 * 📝 ENUNCIADO:
 * 1. Crea un componente `TarjetaContacto` que reciba props: `nombre`, `rol` y `activo` (booleano).
 * 2. Muestra los datos dentro de la tarjeta:
 *    - El nombre en un <h3>.
 *    - El rol en un <p>.
 *    - El estado: si `activo` es true muestra "🟢 Activo", si es false muestra "🔴 Inactivo".
 * 3. Crea y exporta por defecto el componente `Ejercicio3`.
 * 4. En `Ejercicio3`, renderiza al menos dos `<TarjetaContacto />` pasando props con datos distintos a cada una.
 *
 * 💡 PISTAS:
 * - Puedes desestructurar las props directamente en los parámetros:
 *   `function TarjetaContacto({ nombre, rol, activo }) { ... }`
 * - Para la condición del estado puedes usar el operador ternario:
 *   `{activo ? "🟢 Activo" : "🔴 Inactivo"}`
 * - Para pasar valores booleanos o numéricos como props usa llaves:
 *   `<TarjetaContacto nombre="Ana" rol="Dev" activo={true} />`
 */

// 👇 Escribe tu código a partir de aquí:

function TarjetaContacto({ nombre, rol, activo }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <h3>{nombre}</h3>
        <p>Rol: {rol}</p>
        <p>{activo ? "🟢 Activo" : "🔴 Inactivo"}</p>
        </div>
    );
}

export default function Ejercicio3() {
    return (
        <div>
        <h2>Lista de Contactos</h2>
        <TarjetaContacto nombre="Juan Pérez" rol="Frontend Developer" activo={true} />
        <TarjetaContacto nombre="María López" rol="Backend Developer" activo={false} />
        <TarjetaContacto nombre="Carlos Gómez" rol="DevOps Engineer" activo={true} />
        </div>
    );
}