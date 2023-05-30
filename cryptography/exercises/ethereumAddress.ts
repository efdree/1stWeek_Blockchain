/**
 * Problema: Escriba una función que tome una clave privada como entrada y genere la dirección Ethereum correspondiente.
 * La función debe devolver el address de Ethereum como un tipo de dato string.
 * La dirección debe tener el prefijo '0x'.
 * La dirección debe ser los últimos 20 bytes del hash keccak256 de la clave pública.
 *
 * El método de la función es getAddressFromPrivateKey(privateKey: string): string
 * 
 * Pasos:
 * 1 - Inicializar la curva secp256k1
 * 2 - Generar un par de llaves a partir de la clave privada (usar keyFromPrivate)
 * 3 - Obtenga la clave pública del par de llaves (utilice getPublic)
 * 4 - Hashea la llave pública usando keccak256 y elimine el primer byte (0x04) de la clave pública
 *      para usar el método keccak256, pase como argumento un buffer: Buffer.from(llave publica, "hex")
 * 5 - Agregue el prefijo '0x' al hash y tome los últimos 20 bytes (40 caracteres)
 *
 * Run the tests with the following command:
 * npx hardhat test test/ethereumAddress.ts
 */

import { ec } from "elliptic";
import { keccak_256 } from "js-sha3";

export function getAddressFromPrivateKey(privateKey: string): string {
    // 1 - Inicializar la curva secp256k1

    // 2 - Generar un par de llaves a partir de la clave privada (usar keyFromPrivate)

    // 3 - Obtenga la clave pública del par de llaves (utilice getPublic)

    // 4 - Hashea la llave pública usando keccak256 y elimine el primer byte (0x04) de la clave pública
    //      para usar el método keccak256, pase como argumento un buffer: Buffer.from(llave publica, "hex")

    // 5 - Agregue el prefijo '0x' al hash y tome los últimos 20 bytes (40 caracteres)

    // return address;
    return "";
}
