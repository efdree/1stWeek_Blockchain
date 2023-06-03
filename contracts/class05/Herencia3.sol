// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Humano {
    // virtual: indica que el metodo puede ser sobreescrito (pero aun no se ha sobreescrito)
    function saludar() public pure virtual returns (string memory) {
        return "Hola, soy Humano";
    }
}

contract Hombre is Humano {
    function saludar() public pure virtual override returns (string memory) {
        return "Hola, soy Hombre";
    }
}

contract Marcos is Humano, Hombre {
    function saludar()
        public
        pure
        override(Humano, Hombre)
        returns (string memory)
    {
        return "Hola, soy Marcos";
    }
}
