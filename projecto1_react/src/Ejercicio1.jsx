/**
 * ============================================================================
 * EJERCICIO 1: Conocer el punto de entrada y JSX básico
 * ============================================================================
 *
 * 🎯 OBJETIVO:
 * Aprender a combinar HTML y JavaScript dentro de la sintaxis JSX.
 *
 * 📝 ENUNCIADO:
 * 1. Crea y exporta por defecto un componente funcional llamado `Ejercicio1`.
 * 2. Declara dos variables constantes dentro de la función: `nombre` (tu nombre) y `curso` (ej. "React").
 * 3. En el return del componente, renderiza:
 *    - Un contenedor <div> principal.
 *    - Un encabezado <h1> que diga "¡Hola, [nombre]!".
 *    - Un párrafo <p> que diga "Bienvenido al curso de [curso]".
 *    - Un párrafo <p> que muestre la fecha actual usando `new Date().toLocaleDateString()`.
 *
 * 💡 PISTAS:
 * - Estructura básica de un componente:
 *   export default function Ejercicio1() {
 *     return ( ... );
 *   }
 * - Para mostrar el valor de una variable de JavaScript en JSX, enciérrala entre llaves `{}`.
 * - Todo componente debe retornar un único elemento contenedor raíz.
 */

// 👇 Escribe tu código a partir de aquí:

export default function Ejercicio1() {
    const nombre = "daniel";
    const curso = "React";
    
    return (
        <div>
            <h1>Hola, {nombre}!</h1>
            <p>Bienvenido al curso de {curso}</p>
            <p>Fecha actual: {new Date().toLocaleDateString()}</p>
        </div>
    );
}