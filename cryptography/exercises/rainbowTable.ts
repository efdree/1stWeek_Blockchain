/**
 * HASHING DE FUERZA BRUTA: The Rainbow Table
 *
 * La función hash tiene propiedades que las hace muy útiles para la criptografía.
 * 1. Determinista: Dado los mismos inputs, el resultado siempre será el mismo.
 * 2. Unidireccional: es imposible invertir la función hash para obtener los inputs.
 * 3. Resistente a colisiones: es imposible encontrar dos inputs diferentes que produzcan el mismo resultado.
 * 4. Resistente a la imagen previa (pre-imagen): es imposible encontrar un input que produzca una respuesta determinada.
 * 5. Efecto avalancha: Un pequeño cambio en el input producirá un gran cambio en el resultado.
 * 6. Construcción Merkle-Damgard: La función hash es una construcción Merkle-Damgard.
 *
 * ¿Qué es Merkle-Damgard?
 * La construcción Merkle-Damgard es un método para construir una función hash a partir de una función de compresión.
 * Es ampliamente utilizado en muchas aplicaciones criptográficas, incluido el algoritmo SHA-256 utilizado en la tecnología blockchain.
 * En esta construcción, el mensaje se divide en bloques de tamaño fijo, que luego son procesados por la función de compresión.
 * La salida de la función de compresión se combina luego con el siguiente bloque del mensaje y el proceso continúa hasta que se hayan procesado todos los bloques.
 * El valor hash resultante es la salida de la iteración final de la función de compresión.
 * Fuente: "Manual de criptografía aplicada" de Alfred J. Menezes, Paul C. van Oorschot y Scott A. Vanstone.
 *
 *
 * EJERCICIO: Adivinaremos el input que produjo un resultado hash usando una tabla de arcoiris.
 *
 * ¿Qué es una tabla de arcoiris?
 * Es una lista de las contraseñas más comunes y sus valores hasheados correspondientes.
 * Con esta tabla, un atacante podría adivinar fácilmente la contraseña de un usuario comparando el hash
 * de la contraseña que ingresaron con los valores hash en la tabla del arco iris.
 *
 * Si el valor hash no está en la tabla, podría crear fácilmente otra tabla con contraseñas más comunes.
 *
 * Para defenderse contra el uso de contraseñas seguras, un salt y una función de hash más lento.
 *
 * NOTA:
 *      ¿Qué es una función hash lenta?
 *      Una función hash lenta es un tipo de función hash criptográfica que está diseñada para tomar
 *      una cantidad significativa de tiempo para calcular, lo que lo hace más difícil y requiere muchos recursos
 *      para que un atacante realice un ataque de fuerza bruta o genere una tabla de arcoíris.
 *
 *
 * Crear una función que:
 * - Recibir un valor hash (hashValue)
 * - Compáralo con los valores hasheados de las contraseñas comunes
 * - Devolver la contraseña si se encuentra
 * - Si no se encuentra, devuelve una cadena vacía
 *
 * SUGERENCIA: use la matriz 'mostCommonPasswords' del archivo 'utils.ts'
 *
 * Ejecute las pruebas con el siguiente comando:
 * npx hardhat test test/rainbowTable.ts
 */

import { hash } from "eth-crypto";
// import { mostCommonPasswords } from "./utils";

export function findPassword(hashValue: string): string {
    // Construye la tabla de acoiris (rainbow table)

    // Retorna la contraseña si se encuentra

    // Retornar cadena vacía si contraseña no se encuentra
    return "";
}
