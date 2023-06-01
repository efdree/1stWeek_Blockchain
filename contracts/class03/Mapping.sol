// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Mapping {
    /**
     * Digamos que deseo guardar en una tabla de doble entrada
     * el saludo de cada persona que me visite.
     *
     * La tabla luce como la siguiente:
     *
     *          Nombre (key)        |    Saludo (valor)
     * -----------------------------|---------------------------
     * 1. Juan                      | Hola, soy Juan
     * 2. Maria                     | Hola, soy Maria
     * 3. Jose                      | Hola, soy Jose
     * 4. Carlos                    | Hola, soy Carlos
     * 5. Alicia                    | Hola, soy Alicia
     *
     * En la columna de la izquierda, guardamos el nombre (string)
     * En la columna de la derecha, guardamos el saludo (string)
     *
     * En solidity podemos usar un mapping para guardar esta tabla.
     * Un 'mapping` es un hash table, o tabla de doble entrada.
     */

    /**
     var tabla = {};
     tabla["Juan"] = "Hola, soy Juan";
     tabla["Maria"] = "Hola, soy Maria";
    // borrar info
    delete tabla{"Maria"];

     // leer info de la tabla
     table["Carlos"]; // "Hola, soy Carlos"

     En solidity se llama mapping.
     */
    mapping(string nombre => string saludo) public tablaDeSaludos;

    //  string[] arrayDellaves;

    // setter para el mapping
    function guardarSaludoEnTabla(
        string memory nombre,
        string memory saludo
    ) public {
        tablaDeSaludos[nombre] = saludo;
        //  arrayDellaves.push(nombre);
    }

    // getter para la table
    function leerSaludo(
        string memory nombre
    ) public view returns (string memory) {
        return tablaDeSaludos[nombre];
    }

    // borrar info de la tabla
    function borrarInfoDeTabla(string memory nombre) public {
        delete tablaDeSaludos[nombre];
    }

    /**
     Propiedasdes del mapping
     - Un mapping no se puede iterar/imprimir. No existe el concepto de indices para el mapping
     - El mapping no sabe que llaves (keys) han sido inicializadas
     - Para buscar info en el mapping solo se usa sus llaves para obtener el valor de esa llave (no al revés)
     - No puedo conocer la longitud del mapping (no existen indices)
     */
}
