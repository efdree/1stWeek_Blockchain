// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

contract EventosClase {
    // mapping(string => uint256) materiasYNotas;
    // mapping(address => materiasYNotas) notasPorAlumno;

    mapping(address alumno => mapping(string materia => uint256 nota)) notasPorAlumno;

    function guardarNota(
        address _alumno,
        string calldata _materia,
        uint256 _nota
    ) public {
        notasPorAlumno[_alumno][_materia] = _nota;
    }

    // con 'public' en notasPorAlumno no es necesario este método
    function obtenerNota(
        address _alumno,
        string calldata _materia
    ) public view returns (uint256) {
        return notasPorAlumno[_alumno][_materia];
    }

    function borrarNota(address _alumno, string calldata _materia) public {
        delete notasPorAlumno[_alumno][_materia];
    }
}
