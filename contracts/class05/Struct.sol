// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract LayoutDelContrato {
    // storage
    // varibles constant

    // todas las variables (mapping, arrays, bools, strings, uints, etc)
    // que se definen fuera de los métodos
    // se guardan de manera permanente en el contrato inteligente
    bool esDeDia = true;
    mapping(string => address) nombreABilletera;

    // modifiers
    // eventos
    // constructor
    // metodos public
    // metodos internal
}

contract Struct {
    // Struct
    // Te permite crear datos complejos (definidos por el mismo usuario)
    // Es una agrupación de distintos tipos de variables en uno solo
    // Agrupa datos bajo una sola variable
    // El struct puede guardar cualquier tipo de datos (excepto a sí mismo)
    struct Balance {
        uint256 monto;
        uint256 limite;
        uint256 interes;
        string name;
    }

    function crearBalance() public {
        // Version resumida
        // Balance memory miBalance = Balance(123, 2000, 12, "Cuenta de Ahorro");

        // Más legible
        Balance memory miBalance = Balance({
            monto: 123,
            limite: 2000,
            interes: 12,
            name: "Cuenta de Ahorro"
        });
    }

    struct Profesor {
        string nombre;
        string curso;
        uint256 edad;
        string location;
    }
    // llave: profesor, valor: Profesor (struct)
    mapping(address billeteraProfesor => Profesor) profesorPorAddress;

    function guardarProfesorEnMapping(address _profesorBilletera) public {
        // memory temporal
        Profesor memory profesor = Profesor("Carlos", "Mate", 123, "Lima");
        profesor.nombre = "Carlo Manrique";
        profesor.curso = "Matematica";
        // otra logica adicional antes de guardarlo en storage

        // mapping es storage. entonces profesor se guarda de manera permanente
        profesorPorAddress[_profesorBilletera] = profesor;
    }

    function guardarProfesorEnMappingSinMemory(
        address _profesorBilletera
    ) public {
        // Menos consumo de gas que en la primera
        profesorPorAddress[_profesorBilletera] = Profesor(
            "Carlos",
            "Mate",
            123,
            "Lima"
        );
    }

    struct DNI {
        uint256 numero;
        string nombre;
        string apellido;
    }

    struct Persona {
        DNI dni; // Un struct anidado
        uint256 altura;
        uint256 perso;
    }

    // Definido para storage
    mapping(address => Persona) listaDePersonas;

    function guardarInfoDePersona(
        uint256 _numero,
        string memory _nombre,
        string memory _apellido,
        uint256 _altura,
        uint256 _peso
    ) public {
        // no podemos crear un struct para el storage desde un método
        DNI memory _dni = DNI(_numero, _nombre, _apellido);
        Persona memory _persona = Persona(_dni, _altura, _peso);

        // Aqui pasa a storage
        listaDePersonas[msg.sender] = _persona;
    }

    function LeerInfoDePersona(address _billeteraPersona) public {
        // _persona se ha pasado por valor porque se ha usado 'memory'
        Persona memory _persona = listaDePersonas[msg.sender];
        _persona.altura = 123123;
    }
}

contract MappingEnStruct {
    // 14-15 es el número máximo de elementos de un struct
    // Pasado el límite de miembros de un struct: Call Stack Error
    struct DNI {
        uint256 numero;
        string nombre;
        string apellido;
    }
    struct Persona {
        DNI dni; // Un struct anidado
        uint256 altura;
        uint256 peso;
        // quiero mapear para cada persona la cantidad de activos que posee
        // nombre => numero de activos
        mapping(string nombreDePersona => uint256 numActivos) listaDeActivos;
    }

    // Definido para storage
    mapping(address billeteraPersona => Persona) listaDePersonas;

    function guardarInfoDePersona(address _billetearPersona) public {
        DNI memory _dni = DNI(123, "Carlos", "Manrique");

        // No se puede inicializar de esta manera
        // Un struct que posee un mapping
        // EN cambio, se debe apuntar directamente al storage
        // Persona memory _persona = Persona(_dni, 120, 89, );

        //A travès de 'storage', estoy guardando de info de manera permamente
        // persona representa el valor guardado en  listaDePersonas[_billetearPersona]
        // Si quiero modificar persona, le pongo 'storage'
        // Si quiero solamente leer persona, le pongo memory
        // _persona se ha pasado por referencia (puntero) porque se ha usado 'storage'
        Persona storage persona = listaDePersonas[_billetearPersona];
        persona.dni = _dni;
        persona.altura = 123;
        persona.peso = 123;
        persona.listaDeActivos["Carlos"] = 1234432432;
        persona.listaDeActivos["Maria"] = 99099;

        Persona storage persona2 = listaDePersonas[_billetearPersona];
    }
}
