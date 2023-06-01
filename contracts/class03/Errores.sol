// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MappingErrores {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    error NoEresElOwner();

    mapping(string nombre => string saludo) public tablaDeSaludos;

    function guardarSaludoEnTabla(
        string memory nombre,
        string memory saludo
    ) public {
        // el checking a traves del revert es mas económico (menos gas)
        if (msg.sender != owner) revert NoEresElOwner();
        // require
        // se sugiere poner el checking
        require(msg.sender == owner, "No Eres El Owner");
        // 1er argument - validacion logica. El output debe ser un boolean
        // 2do arugment - es el mensaje a ser propagado al usuario

        tablaDeSaludos[nombre] = saludo;
        tablaDeSaludos[nombre] = saludo;
        tablaDeSaludos[nombre] = saludo;
        // Atomicidad de la trasaccion
        // blanco y negro
        // o todo se guarda o nada guarda
        // o tode se procada o nada se procesa
        // otras operaciones
    }

    function leerSaludo(
        string memory nombre
    ) public view returns (string memory) {
        return tablaDeSaludos[nombre];
    }

    function borrarInfoDeTabla(string memory nombre) public {
        delete tablaDeSaludos[nombre];
    }
}
