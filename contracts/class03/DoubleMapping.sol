// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract DoubleMapping {
    // | ------------- | -------- | ------ | ---------- | --------- |
    // |               | Historia | Lengua | Matematica | Geografia |
    // | Juan (0x01)   | 20       | 20     | 20         | 20        |
    // | Maria (0x02)  | 20       | 20     | 20         | 20        |
    // | Carlos (0x03) | 20       | 20     | 20         | 20        |
    // | Sara (0x04)   | 20       | 20     | 20         | 20        |

    // mapping(curso => nota) materiaYNotas;
    // Para Juan
    // materiaYNotas[Historia] = 20
    // materiaYNotas[Lengua] = 20

    // Para Maria
    // materiaYNotas[Historia] = 20
    // materiaYNotas[Lengua] = 20

    // Talba que va de nombres a materiaYNotas
    // mapping(string => uint256) materiaYNotas;
    // mapping(address => materiaYNotas) notasPorAlumno;

    address owner;

    mapping(address billetera => mapping(string curso => uint256 nota))
        public notasPorAlumno;

    function actualizarNotaPorAlumno(
        address _owner,
        string memory _curso,
        uint256 _nota
    ) public {
        notasPorAlumno[_owner][_curso] = _nota;
    }
}
