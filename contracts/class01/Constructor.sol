// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Constructor {
    // Cuando se inicializa el sc, el constructor se ejecuta
    // Se ejecuta una sola vez durante la vida del SC
    // Recibir parámetros (inyectar info a el SC)
    // Inicializar variables

    // msg.sender es del tipo dato 'address'
    // - es un variable global definida por Solidity
    address miBilletera = 0xCA420CC41ccF5499c05AB3C0B771CE780198555e;
    uint256 public anio;
    address public owner; // hace referencia a quien publica el smart contract

    // billetera == "ethereum address"
    constructor(uint256 _anio) {
        anio = _anio;
        owner = msg.sender; // accedo a la billetera de la p. que publico el SC
    }

    function obtenerOwnerYAnio()
        public
        view
        returns (address, uint256, address)
    {
        return (owner, anio, miBilletera);
    }

    // Leer un metodo que retorna multiples valores
    function leerMetodo() public view {
        (
            address _owner,
            uint256 _anio,
            address _miBilletera
        ) = obtenerOwnerYAnio();
        // usar _owner, _anio, ...
    }

    function definirNombrePorAdelantado() public view returns (uint256 edad) {
        // uint256 edad = anio + 132;
        // return edad;
        edad = anio + 132;
        uint256 noEsEdad = 234234;
        return noEsEdad;
    }
}
