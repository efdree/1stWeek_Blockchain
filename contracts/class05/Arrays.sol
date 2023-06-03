// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Arrays {
    // Un array en solidity se define T[k];
    // T representa el tipo de dato
    // k representa la cantidad de elementos de dicho array
    // No se puede alterar el length del array

    // array de cinco elementos enteros
    // se asumeq que se guarda en storage
    uint256[5] arrayEnteros;

    // un array de treinta elementos booleans
    bool[30] elementosBooleans;

    // array de 10 elementos de tipo string
    string[10] arrayCadena;

    function guardarInfoEnArrays() public {
        // Solo puedo guardar informacion usando sus indices
        arrayEnteros[0] = 111;
        // ...
        arrayEnteros[4] = 444;

        uint256 _length = elementosBooleans.length;
        for (uint256 i; i < _length; i++) {
            elementosBooleans[i] = i % 2 == 0 ? true : false;
        }

        // Cual seria el valor que ha quedado guardado:
        // Regresa a sus valores por defecto
        // El array no cambia de tamaño
        delete arrayEnteros[0];
        delete arrayEnteros[4];
    }
}

contract ArrayDinamico {
    // T[] nombreDelArray;
    // T es el tipo de dato
    // El array que definen en storage tienen push y pop
    uint256[] arrayDinamicoDeEnteros;
    bool[] arrayDinamicoDeBools;
    string[] arrayDinamicoDeStrings;

    function guardarInfoEnElArray() public {
        arrayDinamicoDeEnteros.push(123); // [123]
        arrayDinamicoDeEnteros.push(222); // [123, 222]
        arrayDinamicoDeEnteros.push(333); // [123, 222, 333]
        delete arrayDinamicoDeEnteros[2]; // [123, 222, 0]

        arrayDinamicoDeEnteros.pop(); // [123, 222]
        arrayDinamicoDeEnteros.pop(); // [123]
        arrayDinamicoDeEnteros.pop(); // []

        // Qué pasa con map, reduce, forEach, find, filter, split, splice, sort?
        // No existen en solidity para el tipo de dato array dinamico
    }

    // El array (nuevo) que definen dentro un metodo tiene que tener un tamaño fijo y no tiene push ni pop
    // pure: se usa cuando el metodo no lee ninguna (variable) info del smart contract
    // pure (programacion funcional): el metodo no tiene efectos secundarios (no hace write)
    function crearArrayTemporal() public pure returns (uint256[] memory) {
        // este array no esta en storage
        // Para poder usar este arary, defino la cantidad de elementos del array
        uint256[] memory arrayEnMemory = new uint256[](10);
        // No se usan pop ni push
        // arrayEnMemory.pop(0);
        // arrayEnMemory.push(0);
        arrayEnMemory[0] = 111;
        arrayEnMemory[1] = 222;

        return arrayEnMemory;
    }

    struct DNI {
        uint256 numero;
        string nombre;
        string apellido;
    }
    DNI[] public listaDeVotantes;

    function guardarEnArray() public {
        listaDeVotantes.push(DNI(1234123, "Carlos", "Manrique"));

        DNI memory _dni = DNI(1234123, "Carlos", "Manrique");
        listaDeVotantes.push(_dni);
    }

    struct Profesor {
        string nombre;
        uint256 edad;
        string[] materiasADictar;
    }
    mapping(address billeteraProfesor => Profesor) profesorPorAddress;

    function guardarInfoDeProfesorMemory(address _billeteraProfesor) public {
        Profesor memory _profesor = Profesor({
            nombre: "Carlos",
            edad: 123,
            materiasADictar: new string[](5)
        });
        _profesor.materiasADictar[0] = "Historia";
        _profesor.materiasADictar[1] = "Lengua";
        _profesor.materiasADictar[2] = "Historia2";
        _profesor.materiasADictar[3] = "Historia3";
        _profesor.materiasADictar[4] = "Historia4";

        profesorPorAddress[_billeteraProfesor] = _profesor;
    }

    function guardarInfoDeProfesorStorage(address _billeteraProfesor) public {
        Profesor storage _profesor = profesorPorAddress[_billeteraProfesor];
        _profesor.nombre = "Carlos";
        _profesor.edad = 123;
        _profesor.materiasADictar.push("");
        _profesor.materiasADictar.push("");
        _profesor.materiasADictar.push("");
        _profesor.materiasADictar.push("");
        _profesor.materiasADictar.push("");
        _profesor.materiasADictar.push("");
        _profesor.materiasADictar.push("");
    }

    // mapping(address _billeteraUsuario => Struct1) infolistasStruct1;
    // mapping(address _billeteraUsuario => Struct2) infolistasStruct2;
    // address[] public listaDeUsuarios;

    // function guardarInfo() public {
    //     infolistasStruct1[msg.sender] = Struct1();
    //     infolistasStruct2[msg.sender] = Struct2();
    //     listaDeUsuarios.push(msg.sender);
    // }

    // function leeListaDeBilletera() public view returns(address[] memory) {
    //     address[] memory _listaDeUsuario = new address[](listaDeUsuarios.length);
    //     for (uint256 i; i < listaDeUsuarios.length; i++) {
    //         _listaDeUsuario[i] = listaDeUsuarios[i];
    //     }
    //     return _listaDeUsuarios;
    // }
}
