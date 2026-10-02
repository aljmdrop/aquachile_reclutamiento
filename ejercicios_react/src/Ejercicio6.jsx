/**
 * ============================================================================
 * EJERCICIO 6: Renderizado Condicional y Toggle de Visibilidad
 * ============================================================================
 *
 * 🎯 OBJETIVO:
 * Aprender a mostrar u ocultar elementos en la interfaz dinámicamente según el estado,
 * utilizando operadores lógicos (&&) y operadores ternarios.
 *
 * 📝 ENUNCIADO:
 * 1. Crea y exporta por defecto el componente `Ejercicio6`.
 * 2. Declara un estado booleano llamado `mostrarDetalles`, inicializado en `false`.
 * 3. Renderiza una tarjeta de producto con:
 *    - Título del producto: "Laptop Gamer RTX 4060"
 *    - Precio: "$1.200.000 CLP"
 *    - Un botón que cambie el texto entre "Ver detalles" y "Ocultar detalles" según el estado.
 * 4. Al hacer click en el botón, debe alternar el valor de `mostrarDetalles` (de true a false y viceversa).
 * 5. Cuando `mostrarDetalles` sea `true`, muestra un contenedor <div> con las especificaciones:
 *    - "Procesador: Intel i7 13th Gen"
 *    - "RAM: 16 GB DDR5"
 *    - "Almacenamiento: 1 TB SSD NVMe"
 *    - Un mensaje adicional con estilo condicional o aviso: "Stock disponible: 5 unidades"
 *
 * 💡 PISTAS:
 * - Para alternar un booleano: `setMostrarDetalles(!mostrarDetalles)` o funcionalmente `setMostrarDetalles(prev => !prev)`.
 * - Renderizado condicional con && (cortocircuito):
 *   `{mostrarDetalles && <div>...detalles...</div>}`
 * - Operador ternario para el texto del botón:
 *   `{mostrarDetalles ? "Ocultar detalles" : "Ver detalles"}`
 */

import { useState } from 'react';

export default function Ejercicio6() {
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', maxWidth: '350px' }}>
        <h2>Laptop Gamer RTX 4060</h2>
        <p>Precio: $1.200.000 CLP</p>
        
        <button onClick={() => setMostrarDetalles(!mostrarDetalles)}>
            {mostrarDetalles ? "Ocultar detalles" : "Ver detalles"}
        </button>

        {mostrarDetalles && (
            <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
            <p>Procesador: Intel i7 13th Gen</p>
            <p>RAM: 16 GB DDR5</p>
            <p>Almacenamiento: 1 TB SSD NVMe</p>
            <p style={{ color: 'green', fontWeight: 'bold' }}>Stock disponible: 5 unidades</p>
            </div>
        )}
        </div>
    );
}
