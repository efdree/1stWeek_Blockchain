// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

contract EventosClase {
    /**
    GUARDAR NOTA:
    * 1G - La nota tiene que ser mayor o igual a 0 pero menor o igual a 20
    - 2G - El address del alumno no puede ser el address 0: `0x0000000000000000000000000000000000000000`
    - 3G - La materia no puede ser un string vacío

    BORRAR NOTA:
    - 1B - El address del alumno no puede ser el address 0: `0x0000000000000000000000000000000000000000`
    */
    mapping(address alumno => mapping(string materia => uint256 nota)) notasPorAlumno;

    error NotaIncorrecta(uint256 nota, uint256 nota2, uint256 nota3);
    error AddressZero(); // validacion clasica o de buena practica

    // address zero: 0x0000000000000000000000000000

    function guardarNota(
        address _alumno,
        string calldata _materia,
        uint256 _nota
    ) public {
        // * 1G - La nota tiene que ser mayor o igual a 0 pero menor o igual a 20
        // require(validacion logica, mensaje de error si la validacion falla);
        // si validacion es true, se continua con la operacion
        // si validacion es false, se lanza el mensaje de error
        // require(_nota >= 0 && _nota <= 20 , "Nota no esta entre 0 y 20 (inclusivo)");
        // if(_nota < 0 || _nota > 20) revert NotaIncorrecta(_nota);
        // if(_nota < 0 || _nota > 20) revert NotaIncorrecta({nota2: _nota, nota3: _nota, nota: _nota});
        if (_nota < 0 || _nota > 20)
            revert("Nota noe sta entre 0 y 20 (inclusivo)");

        // - 2G - El address del alumno no puede ser el address 0: `0x0000000000000000000000000000000000000000`
        // address(0) === 0x0000000000000000000000000000000000000000
        // require(_alumno != 0x0000000000000000000000000000000000000000);
        require(_alumno != address(0), "Alumno es address zero");

        // - 3G - La materia no puede ser un string vacío
        // string es un tipo dinamicao que funciona como un array
        // string (array) y otro array, no se pude comparar
        require(bytes(_materia).length > 0, "Materia esta vacio");

        notasPorAlumno[_alumno][_materia] = _nota;
    }

    // con 'public' en notasPorAlumno no es necesario este método
    function obtenerNota(
        address _alumno,
        string memory _materia
    ) public view returns (uint256) {
        // _materia = string.concat(_materia, "- Materia");
        // En solidity, cuando usamos tipos de dinámico (array, string, bytes) se especifica
        // en donde se guardara dicha variable que usa ese tipo dinamico

        // memory: es un tipo de memoria temporal (que se peude modificar dentro del metodo)
        // - dado que designa opcodes para que esta variable pueda ser alterada

        // calldata: es un tipo de memoria temporal (que NO SE puede modificar dentro del metodo)
        // - ahorra gas (en comp con memory) porque se fija la variable en un valor inalterable
        // storage
        return notasPorAlumno[_alumno][_materia];
    }

    function borrarNota(address _alumno, string calldata _materia) public {
        delete notasPorAlumno[_alumno][_materia];
    }

    // NO ES POSIBLE!!!!! ERROR DE COMPILACION!!
    // function borrarAlumno(address _alumno) public {
    //     // dentro de notasPorAlumno[_alumno] hay otro mapping
    //     // en solidity no se puede borrar mappings enteros
    //     // Tendriamos que borrar elemento por elemento de dicho mapping
    //     delete notasPorAlumno[_alumno];
    // }
}
