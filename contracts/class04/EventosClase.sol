// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

contract EventosClase {
    // Suscripcion
    // - el smart contract propaga informacion al mundo externo
    // - mundo externo == otros smart contracts no pueden escuchar eventos
    // - Otros agentes (backend, frontend) pueden escuchar eventos
    //   si se suscriben y desarollar otra logica posterior
    // - Los sc no leen ni rebuscan informacion de eventos

    // Ofrecen contexto de lo que esta sucediendo en una tx
    //  - los eventos llevan parametros que explica el contexto

    // Informacion economica que guarda en el blockchain
    // - Te permite hacer queries de informacion que guardaste en los eventos
    // - Los eventos se guardan con indices (opcional)
    // - Cuando defines el evento, tambien defines los índices de los param. del evento
    // Ejemplo de como se hace un query
    // Javascript
    // Defines el evento que quieres filtrar: "MiEvento"
    // const miEvento = miContrato.events.MiEvento({
    //   filter: {miParametro: [1, 2, 3]}, // filtras por valores específicos
    //   fromBlock: 0, // inicio de número de bloque para delmitar búsqueda
    //   toBlock: 'latest' // fin de número de bloque para delimitar búsqueda
    // });

    // Regla general
    // Se va a crear un evento cada vez que hay un write relativamente importante
    // - se cambia de owner en el contrato
    // - tasa de interes de prestamo

    // Si el frotne end se suscribe a los eventos, quien paga el gas
    // - Escuchar (desde el backewnd/frontend) es gratuito

    // Definicion de un Evento
    event Transfer();

    // Definicion de un event (con argumentos)
    event Deposit(address sender, address receiver);

    // Definicion de un evento (con indices)*
    event Withdraw(
        address indexed account,
        uint256 indexed amount,
        uint256 indexed date
    );

    // deficion de un evento (anonimo)
    // Un evento anonimo te permite indexar hasta cuatro argumentos
    // El evento anoninmo no se ve reflejado en el ABI (output luego de la compilacion)
    event Extract(
        uint256 indexed amount,
        address indexed user,
        uint256 indexed date,
        uint256 indexed rest
    ) anonymous;

    function transfer() public {
        emit Transfer();
    }

    function deposit(address _receiver) public {
        emit Deposit(msg.sender, _receiver);
    }

    function withdraw(uint256 _amount) public {
        // block.timestamp es otra variable (no lo define el usuario)
        // block.timestamp es la fecha en la cual la tx se incluye en el bloque
        emit Withdraw(msg.sender, _amount, block.timestamp);
    }

    uint256 total = 10000000000;

    function extract(uint256 _amount) public {
        // cuando emitimos el evento, mandar tambien cuanto sobra
        emit Extract(_amount, msg.sender, block.timestamp, total - _amount);
    }
}
