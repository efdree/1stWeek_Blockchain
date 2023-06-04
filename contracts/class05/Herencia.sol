// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

// Herencia
// Cuando publico el contrato B, el contrato A no se publica
// El contrato B ya tiene todos los elemtnos del contrato A
// Solamente tendr[ias un address del contrato B

contract A {

} // Contrato base, papa

contract B is A {

} // Contrato derivado, hijo

contract D {

} // contrato base

contract C {

} // contrato base

// Multiple herencia (hereda de varios contratos)
contract E is D, C {

} // contrato derivado

// Regla para heredar contratos: C3 Linearization
contract Humano {

} // contrato base

contract Hombre is Humano {

} // contrato derivado

// El orden de herencia va desde el más base hasta el más derivado
// contract Marcos is Hombre, Humano {} // INCORRECTO
contract Marcos is Humano, Hombre {

} // contrato aun mas derivado

// Elementos a heredar
contract Padre {
    // variables en storage
    // modifiers
    // metodos
    // eventos
    // structs
}

contract Hijo is Padre {}
