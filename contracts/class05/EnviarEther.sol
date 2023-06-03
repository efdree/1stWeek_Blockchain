// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract EnviarEther {
    function ejecutarMethodoYEnviarEther() public payable {
        uint256 cantidadEtherEnviada = msg.value;
    }

    function eviarEther(address _destinatario) public {
        // this hace referencia al smart contract
        // address(this) indica el address del contrato inteligente
        uint256 cantidadDeEther = address(this).balance;
        // MAL: el _destinatario va a transferir cantidadDeEther a ?
        // CORRECTO: EL contrato tranferirá cantidadDeEther a _destinatario
        payable(_destinatario).transfer(cantidadDeEther);
    }

    receive() external payable {}

    fallback() external payable {}
}
