// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

contract ModifiersClase {
    // La fecha de hoy + 30 dias despues (LIMITE)
    // 1 days = 60 * 60 * 24; (segundos)
    // block.timestamp tambien esta en segundos
    uint256 limiteDeTiempo = block.timestamp + 30 days;

    // modifier
    // - te permite extender la funcionalidad de un método
    // - esta funcionalidad se aisla dentro del modifier
    // - esta funcionlidad puede ser utlizada en múltiples métodos
    // - comunmente es usado para hacer las validaciones (require y revert)

    modifier protegerPorFecha() {
        require(block.timestamp <= limiteDeTiempo, "Estas fuera de tiempo");
        _; // <- indica que se debe regresar a ejecutar el cuerpo del metodo
    }

    function protegerPorTiempo() public protegerPorFecha {
        // ejecuta las operaciones (ya se valido el checking en el modifier)
    }

    function protegerPorTiempo2() public protegerPorFecha {
        // ejecuta las operaciones (ya se valido el checking en el modifier)
    }

    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "No eres el owner");
        _;
    }

    function queSoloSeaLlamdoPorElOwner() public onlyOwner protegerPorFecha {}
}

contract ProtegerPausa {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "No eres el owner");
        _;
    }

    bool pausado;
    modifier whenPaused() {
        require(!pausado, "Este metodo esta pausado");
        _;
    }

    function pausar() public onlyOwner {
        pausado = true;
    }

    function despausar() public onlyOwner {
        pausado = false;
    }

    function protegerPorPausa() public whenPaused {}
}

contract ProtegerLista {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "No eres el owner");
        _;
    }

    // mapping => con address filtrados
    mapping(address usuario => bool permitido) listaBlanca;
    modifier validaListaBlanca() {
        require(listaBlanca[msg.sender], "No estas en la lista blanca");
        _;
    }

    function guardarEnListaBlanca(
        address _usuarioAListaBlanca
    ) public onlyOwner {
        listaBlanca[_usuarioAListaBlanca] = true;
    }

    function protegerPorListaBlanca() public validaListaBlanca {}
}

contract ProtegerMultipleModifer {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "No eres el owner");
        _;
    }

    // mapping => con address filtrados
    mapping(address usuario => bool permitido) listaBlanca;
    modifier validaListaBlanca() {
        require(listaBlanca[msg.sender], "No estas en la lista blanca");
        _;
    }

    uint256 limiteDeTiempo = block.timestamp + 30 days;
    modifier protegerPorFecha() {
        require(block.timestamp <= limiteDeTiempo, "Estas fuera de tiempo");
        _; // <- indica que se debe regresar a ejecutar el cuerpo del metodo
    }

    function protegerPorMetodo()
        public
        onlyOwner
        protegerPorFecha
        validaListaBlanca
    {}
}

contract PasarArgumentoModifer {
    address owner;

    modifier validaciones(
        address _user,
        uint256 _edad,
        string memory _nombre
    ) {
        require(_user == owner);
        require(_edad > 20);
        require(bytes(_nombre).length > 0);
        _;
    }

    function llamarSiValidaBilleteraEdadYNombre(
        address _user,
        uint256 _edad,
        string memory _nombre
    )
        public
        validaciones(_user, _edad, _nombre)
    /** modifier2(_user, _edad) modifier3(_user) */ {

    }
}
