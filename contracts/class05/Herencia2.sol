// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Humano {
    function saludoHuman() public pure returns (string memory) {
        return "Hola, soy Humano";
    }
}

// En super, el look de los metodos va desde el mas derivado hasta el mas base
// En la lista de herencia de contratos va desde el mas hasta el mas derivado
contract Hombre is Humano {
    function saludoHombre() public pure returns (string memory) {
        return "Hola, soy Hombre";
    }

    // super (me puedo referir al papá)
    function saludoDeHumano() public pure returns (string memory) {
        return super.saludoHuman();
    }

    function saludoDeHumano2() public pure returns (string memory) {
        return Humano.saludoHuman();
    }
}

contract Marcos is Hombre {
    function saludoMarcos() public pure returns (string memory) {
        return "Hola, soy Marcos";
    }

    function saludoDeHumanoDesdeMarcos() public pure returns (string memory) {
        return super.saludoHuman();
    }

    function saludoDeHombreDesdeMarcos() public pure returns (string memory) {
        return super.saludoHombre();
    }
}
