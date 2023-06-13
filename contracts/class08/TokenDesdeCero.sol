// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract TokenDesdeCero {
    /**
        Metodos getter
        1 - name: me devuele el nombre del token
            - argumento: no
        2 - symbol: me devuelve el simbolo del token
            - argumento: no
        3 - decimals: me devuelve cantidad de decimales
            - argumento: no
        4 - totalSupply: cantidad de tokens acuñados
            - argumento: no
        5 - allowance: indica la cantidad de permiso
            - argumento: owner (address), spender (address)
        6 - balanceOf: cantidad de tokens de una billetera
            - argumento: billetera (address)

        Metodos setter
        7 - transfer: tranfiere tokens del que llama a una billetera destino
            - argumento: to (address), amount (uint256)
        8 - approve: aprobar a un spender una cantidad de tokens a usarse
            - argumento: spender (address), amount (uint256)
        9 - transferFrom: enviar de una billetera origen a una billetera destino una cantidad de tokens
            - argumento: from (address), to (address), amount (uint256)
        otros Metodos: increaseAllowance, decreaseAllowance, burn (opuesto de mint)
    */

    // 1 - name: me devuele el nombre del token
    //     - argumento: no
    function name() public pure returns (string memory) {
        return "Lee Marreros Token";
    }

    // 2 - symbol: me devuelve el simbolo del token
    //     - argumento: no
    function symbol() public pure returns (string memory) {
        return "LMRRTKN";
    }

    // 3 - decimals: me devuelve cantidad de decimales
    //     - argumento: no
    // es pure porque no lee ninguna variable del contrato
    function decimals() public pure returns (uint256) {
        return 18;
    }

    // 4 - totalSupply: cantidad de tokens acuñados
    //     - argumento: no
    // le falta view? el view se aplica al metodo (al igual que pure)
    uint256 public totalSupply;

    // 5 - allowance: indica la cantidad de permiso
    //     - argumento: owner (address), spender (address)

    // 6 - balanceOf: cantidad de tokens de una billetera
    //     - argumento: billetera (address)
    mapping(address billetera => uint256 balanceDeToken) _balances;

    // el view se pone a metodos de lectura (read-only)
    // pure X => no es pure porque lee informacion del smart contract
    function balanceOf(address _billetera) public view returns (uint256) {
        return _balances[_billetera];
    }

    // 7 - transfer: tranfiere tokens del que llama a una billetera destino
    //     - argumento: to (address), amount (uint256)
    function transfer(address _to, uint256 _amount) public {
        // msg.sender => es el que llama
        _balances[msg.sender] -= _amount;
        _balances[_to] += _amount;
    }

    // 9 - transferFrom: enviar de una billetera origen a una billetera destino una cantidad de tokens
    //     - argumento: from (address), to (address), amount (uint256)
    function transferFrom(address _from, address _to, uint256 _amount) public {
        // validacion de permiso (allowance)
        _balances[_from] -= _amount;
        _balances[_to] += _amount;
    }
}
