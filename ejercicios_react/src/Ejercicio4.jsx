/**
 * ============================================================================
 * EJERCICIO 4: Interactividad con Eventos y Estado (useState)
 * ============================================================================
 * 
 * 🎯 OBJETIVO:
 * Manejar el estado reactivo de la interfaz con el hook `useState` y reaccionar a clicks.
 * 
 * 📝 ENUNCIADO:
 * 1. Importa el hook `useState` desde 'react'.
 * 2. Crea y exporta por defecto el componente `Ejercicio4`.
 * 3. Dentro del componente, inicializa un estado llamado `contador` con valor inicial 0.
 * 4. Muestra en pantalla el valor actual del contador.
 * 5. Agrega 3 botones interactivos con sus respectivos eventos `onClick`:
 *    - Botón 1: Aumentar (+1 al contador).
 *    - Botón 2: Disminuir (-1 al contador).
 *    - Botón 3: Reiniciar (volver a 0).
 * 
 * 💡 PISTAS:
 * - Importación: `import { useState } from 'react';`
 * - Declaración de estado: `const [contador, setContador] = useState(0);`
 * - NUNCA hagas `contador = contador + 1`. Usa siempre la función actualizadora: `setContador(contador + 1)`.
 * - Pasa una función al evento `onClick`: `onClick={() => setContador(contador + 1)}`.
 */

// 👇 Escribe tu código a partir de aquí:

import { useState } from 'react';

export default function Ejercicio4() {
    const [contador, setContador] = useState(0);

    return (
        <div>
        <h2>Contador: {contador}</h2>
        <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        <button onClick={() => setContador(contador - 1)}>Disminuir</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
        </div>
    );
}