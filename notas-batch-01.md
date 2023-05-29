[TOC]

# BOOTCAMP DE PROGRAMACIÓN BLOCKCHAIN - BLOCKCHAIN BITES Y NTT DATA

![image-20230528200209176](https://github.com/Blockchain-Bites/batch-01-bootcamp/assets/3300958/202ca065-2c3e-4991-a4cc-f9ad1f10a8b2)

![BOOTCAMP CURSO](https://github.com/Blockchain-Bites/batch-01-bootcamp/assets/3300958/e80901e7-3c9b-48c5-981d-1ca28d224ba4)

# Fechas

De 6:30 pm a 9:30 pm (presenciales en Bloom Tower):

- 29 de Mayo a 2 de Junio
- 5 de Junio a 9 de Junio
- 12 de Junio a 16 de Junio

Presentación proyecto final: 30 de Junio

[Inscríbete al calendario clases presenciales](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGp0dTI4dGVlMjJyb2ZtbXFhbHJmMGZmbnRfMjAyMzA1MjlUMjMzMDAwWiBsZWUubWFycmVyb3NAYmxvY2tjaGFpbmJpdGVzLmNv&tmsrc=lee.marreros%40blockchainbites.co&scp=ALL)

[Inscríbete a la fecha del proyecto final](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NW9jaWk1aTVvdmU2cmN0OWwydmgxNmNlOWQgbGVlLm1hcnJlcm9zQGJsb2NrY2hhaW5iaXRlcy5jbw&tmsrc=lee.marreros%40blockchainbites.co)

# Foro (preguntas), material estudio

[Invitación Discord](https://discord.com/invite/7qjKQGmjUq)

[Invitación #batch-1-bootcamp-presencial](https://discord.gg/7GSx3tBg)

[Preguntas y respuestas](https://discord.gg/kv4w7XTV)

[Materiales de estudio](https://discord.gg/d7bAma3f)

# Mentores

Reunión con los mentores vía virtual:

1. Reunión con su equipo asignado para debatir y absolver dudas entre ustedes
2. Recurran a google, stackoverflow, blogs y libros para resolver la pregunta o ampliarla
3. Elaborar lista de preguntas en equipo
4. Separar un horario en el calendario del mentor

Ten en cuenta que no todos los mentores estarán disponibles en todo momento. Usen bien sus horas asignadas.

Calendario:

- Edwin [calendario](https://calendly.com/d/y3g-23b-rw5/30min)
- John Sevillano [calendario](https://calendly.com/d/2nd-zyn-d9n/blockchain-mentoring-meeting)
- Pedro Valera [calendario](https://calendly.com/pedro24)

# Crypto Zombies

Este juego debe ser completado dentro de las tres semanas de clases empezando el 20 de Mayo. Se puede jugar en varios idiomas incluido el español.

[Link del juego](https://cryptozombies.io/)

Terminar estas dos fases:

![image-20230528200524272](https://github.com/Blockchain-Bites/batch-01-bootcamp/assets/3300958/d82d1b12-ffa8-4a5c-9cf0-638b171e9990)

# Síguenos

[Discord](https://discord.gg/s5HRnGEG)

[LinkedIn](https://www.linkedin.com/company/blockchain-bites-es/)

[MeetUp](https://www.meetup.com/blockchain-bites)

[Twitter](https://twitter.com/bbitesschool)

# Preparación clase 01

## Requisitos

1. Repositorio y Sistema

   - Node version 14.x. Usar nvm para intalar otras versiones de `nodeJS`

   - Hacer fork del [repositorio de la clase](https://github.com/Blockchain-Bites/batch-01-bootcamp)

   - Ubicarte en el branch `main` y luego instalar los paquetes de NPM

     - `$ npm install`

   - Abrir un terminal en la carpeta raíz. Correr el siguiente comando y verificar errores:

     - `$ npx hardhat compile`

     De presentarse algún error, solucionarlo mediante recursos online.

2. Billetera y Matic

   - Instalar extensión de Metamask en Navegador. [Descargar aquí](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn). Crear cuenta. Habilitar una billetera en Metamask. Cambiar a la red `Mumbai`. Enviar `Matic` a la billetera creada usando el `address` de la billetera. Para solicitar `Matic`, ingresar a [Polygon Faucet](https://faucet.polygon.technology/) o [Faucet de Alchemy](https://mumbaifaucet.com/). Recibirás un balance en `Matic`

3. # Añadir Mumbai a Metamask

   1. Dirigirte a [Mumbai Polygon Scan](https://mumbai.polygonscan.com/)

   2. Hacia el final de la página buscar el botón `Add Mumbai Network`

   3. Se abrirará una ventana de Metamask. Dar confirmar y continuar hasta que se efectúe el cambio de red

4. Crear archivo de Secrets `.env` duplicando el archivo `.env-copy`

   - `$ cp .env-copy .env`

5. Rellenar las claves del archivo `.env`:

   - `API_KEY_POLYGONSCAN`: Dirigirte a [PolygonScan](https://polygonscan.com/). Click en `Sign in`. Click en `Click to sign up` y terminar de crear la cuenta en Polygon Scan. Luego de crear la cuenta ingresar con tus credenciales. Dirigirte a la columna de la derecha. Buscar `OTHER` > `API Keys`. Crear un nuevo api key haciendo click en `+ Add` ubicado en la esquina superior derecha. Darle nombre al proyecto y click en `Create New API Key`. Copiar el `API Key Token` dentro del archivo `.env`.
   - `PRIVATE_KEY`: Obtener el `private key` de la wallet que se creó en el punto `2` siguiendo [estos pasos](http://help.silamoney.com/en/articles/4254246-how-to-generate-ethereum-keys#:~:text=Retrieving%20your%20Private%20Key%20using,password%20and%20then%20click%20Confirm.) y copiarlo en esta variable en el archivo `.env`.
   - `MUMBAI_TESNET_URL`: Crear una cuenta en [Alchemy](https://dashboard.alchemyapi.io/). Ingresar al dashboard y crear una app `+ CREATE APP`. Escoger `NAME` y `DESCRIPTION` cualquiera. Escoger `ENVIRONMENT` = `Development`, `CHAIN` = `Polygon` y `NETWORK` = `Mumbai`. Hacer click en `VIEW KEY` y copiar el valor dentro de `HTTPS` en el documento `.env` para esta variable de entorno. Saltar el paso de pago del servicio.

6. Comprobar que no hay ningún error ejecutando el siguiente comando:

   - `$ npx hardhat --network mumbai run scripts/deploy.js`
   - Esperar de 2 a 3 minutos mientras se hace el deployment.
   - Si todo fue correctamente ejecutado, se verá el siguiente resultado:

   ```bash
   Mi primer token esta publicado en el address 0x2148A3eA24201A5D503CA4378639F6b40654190f
   Empezo la verificaion
   Nothing to compile
   
   Successfully submitted source code for contract
   contracts/MiPrimerContrato.sol:MiPrimerContrato at 0x2148A3eA24201A5D503CA4378639F6b40654190f
   for verification on the block explorer. Waiting for verification result...
   
   Successfully verified contract MiPrimerContrato on Etherscan.
   https://mumbai.polygonscan.com/address/0x2148A3eA24201A5D503CA4378639F6b40654190f#code
   ```

7. Razones por las cuales el comando anterior podría fallar

   - El archivo `.env` no tiene las claves correctas
   - La llave privada de la billetara de Metamask no cuenta con los fondos suficientes
   - `NodeJS` es una versión antigua



# **Proyectos desarrollados**

A continuación es una lista de projectos en los que trabajo de princpio a fin. Servirá de inspiración para los proyectos finales.

## Cuy Token

![image](https://user-images.githubusercontent.com/3300958/193497021-8c2b7c80-0e54-455f-94aa-3fb03e23a651.png)

- Sinopsis: Vender el token para poder otorgar préstamos a diferentes tipos de proyectos con potencial. El primer proyecto financiado fue Pachacuy que logró recaudar 30,000 USD por su propia cuenta.
- Criptomoneda creada usando el estándar ERC20
- Publicado en Binance
- Lanzado en Lima, Perú
- Recaudación 8,000 USD en menos de dos horas
- [Código del token](https://github.com/cuytoken/smartcontract/blob/main/cuyToken.sol)
- [Testing](https://github.com/cuytoken/smartcontract/blob/testing-01/test/Test.js)

## Crypto Index (FIDIS)

![image-20221001000025596](https://user-images.githubusercontent.com/3300958/193497019-ac7ee071-b3ee-4f08-bca3-af4c2aabe18e.png)

- Sinopsis: Comprar una sola criptomoneda que represente a las veinticinco criptomonedas más importantes (tipo S&P 500). Esta lista variará dependiendo de la importancia de cada token.
- Índice de las 25 primero criptomonedas
- Se publicó en Optimism (Layer 2, costos de transacción son exponencialmente diminutos en comparación a Ethereum)
- Multifirma - La ejecución de métodos tiene que ser aprobado por varios administradores antes de ser aprobado
- [Código del token](https://optimistic.etherscan.io/address/0x2735e0080638f8a5373393f3d083ed2777651931#code)
- [Unit Testing](https://github.com/steveleec/25-token-index/blob/main/test/Test.js)
- [Whitepaper](https://github.com/FIDISCorp/FI25/blob/main/docs/FIDIS%20FI25%20Crypto%20Index%20White%20Paper.pdf)

## Pachacuy (Axie Infinity de America del Sur)

![image-20221001000121020](https://user-images.githubusercontent.com/3300958/193497016-7cb60c31-7a31-42a6-9ea1-18d74aafe9a1.png)

- Sinopsis: Juego que representa un mundo virtual en el cual un cuy (personaje principal - NFT) puede comprar tierras y establecer negocios dentro. Los cuyes visitantes hacen uso de los negocios. Estas transacciones tienen el potencial de generar ingresos para dueños y clientes.
- Hay creado su propia moneda llamada Pachacuy
- Toda la lógica del juego está desarrollado en Smart Contracts
- Publicado en Polygon
- Familia (17) de Smart Contracts interconectados
- Implementa diferentes estándares de tokens (ERC777, ERC1155)
- [Código del juego](https://github.com/cuytoken/pachacuy-smart-contracts/tree/master/contracts)
- [Testing](https://github.com/cuytoken/pachacuy-smart-contracts/tree/master/test)
- [White Paper](https://pachacuy.gitbook.io/pachacuy/)
- [Juego en producción](https://play.pachacuy.io/)

**<u>_Colección Moche_</u>**

![image-20221001161514110](https://user-images.githubusercontent.com/3300958/193497010-c53836d7-02f4-4236-8684-09623f5b5943.png)

1. Sinospsis: colección de 10,000 NFTs lanzado en la red Binance. El personaje principal es un cuy y fue creado con un algoritmo de generación de imágenes por capas.
2. Se utilizó un smart contract que sigue el estándar ERC721
3. [Página de compra](https://www.pachacuy.io/moches.php)
4. [Collección en vitrina de Tofu](https://tofunft.com/collection/pachacuy-moche/items)

## Rand Network

![image-20221001154441301](https://user-images.githubusercontent.com/3300958/193497014-16c3c730-4df8-4569-a680-9e98536db28b.png)

![image-20221001155204926](https://user-images.githubusercontent.com/3300958/193497012-f2193f37-90cb-4d80-ac05-236a1cdc622c.png)

1. Sinopsis: Los usuarios depositan USDC (una moneda estable) en Ethereum. Al juntarse, se invierte en diferentes protocolos de Finanzas Decentralizadas (DeFi) que generan intereses y/o recompensas sobre lo depositado. Luego de un tiempo, se retiran los intereses generados para ser repartidos entre los usuarios iniciales
2. Se utilizan dos diferentes blockchain Ethereum y Moonbeam. En la red Ethereum se manejan los fondos e inversiones. En Polygon se realizan las transacciones y procesamientos pesados. La razón de la separación es el costo de transacción.
3. Utiliza contratos actualizables que le permiten arreglar bugs futuros o crear nuevas estructuras de datos internat para albergar información relevante adicional.

## dcSpark

![image-20221001162033296](https://user-images.githubusercontent.com/3300958/193497009-06fe33d3-378b-4182-bed1-36afc35b28af.png)

1. Sinopsis: Crear compatibilidad para blockchains que no son compatible con la Maquina Virtual de Ethereum. Lo hace a través de la creación de Sidechains o la implementación de Layer 2.
2. En la actualidad, mi trabajo es crear un contrato de Staking. Es decir, un contrato que otorga beneficios por realizar depósitos, muy parecido a un depósito a plazo fijo.

# Stack (tooling) de desarrollo web 3

Las herramientas de un blockchain developer son variadas e incluyen herramientas de testing, auditoría, computación en la nube y demás. Estas son las herramientas que uso en mi día a día como desarrollador blockchain:

- Hardhat
- Ethers.js
- Metamask
- Gnosis safe
- Open Zeppelin (standards)
- Open Zeppelin Defender
- Remix
- Mythril (by ConsenSys)
- Alchemy/Infura/Moralis
- Etherscan
- Solidity
- Faucets
- MythX

## Hardhat

![image-20220927070644523](https://user-images.githubusercontent.com/3300958/193497041-1ebf903c-14d3-44de-997c-e710601ec89c.png)

1. Es un ambiente de desarrollo profesional para Ethereum.
2. Te permite publicar contratos en diferentes blockchain (Polygon, Ethereum, Binance, Mumbai, etc.) con simples configuraciones, así como también publicar en un blockchain local para poder verificar que el script de deployment es válido.
3. Provee las bases para poder realizar tests complejos de Smart Contracts de manera automatizada.
4. Incluye un Smart Contract que te permite ver lo logs en Solidity. Es decir, se puede usar 'console.log' dentro del código para analizar ciertos outputs.
5. Es posible programar la verificación de Smart Contracts en el mismo script de deployment, lo cual evita hacerlo manualmente en Etherscan.
6. Dentro de un ambiente de testing, te permite hacer un fork del blockchain Ethereum para interactuar directamente con Smart Contracts publicados en dicha red. Esto es relevante porque algunos Smart Contracts no están en Testnet y no hay otra manera de probarlos.
7. Permite configurar diferentes tipos de versión de compiladores de Solidty, así como también especificar la precisón de la optimización (runs) de los Smart Contracts.

## Ethers.js

![image-20220927070621500](https://user-images.githubusercontent.com/3300958/193497043-6194550b-0af5-4673-b55e-11398e9993e6.png)

1. Librería compacta y completa que te permite interactuar con diferentes blockchain de manera programática. Es decir, puedes leer información del Blockchain, así como también acceder a métodos y propiedades de Smart Contracts publicados en el Blockchain.
2. Puede ser usado tanto el front-end como en el back-end para crear tareas o procesos automatizados que involucren interactuar con Smart Contracts publicados en el Blockchain.
3. Si es usado desde el front, por lo general se usa con Metamask (u otra billetera que funciona en el navegador). A través de Metamask, las operaciones definidas con Ether.js será firmadas con la billetera de Metamask (donde se alberga la llave privada del usuario)
4. Para ser usado desde el back, se requiere tener la llave privada alojada en un archivo .env e instanciar el objeto 'Contract' en el código del backend.

## Metamask

![image-20220927070334618](https://user-images.githubusercontent.com/3300958/193497046-581118bb-6ca5-4f3a-b552-f69525c56219.png)

1. Es una billetera de criptomonedas que funciona como extensión del browser o aplicación de celular.
2. Te permite interactuar (conectar y autenticarte) con aplicaciones decentralizadas con previa confirmación del usuario antes de firmar cada transacción.
3. Con Metamask, se pueden crear llaves privadas y públicas a demanda.
4. Puedes agregar diferentes criptomonedas para visualizar el balance de las mismas, así como también realizar transferencias a diferentes cuentas (addresses) con una simple interface.

## Gnosis safe

![image-20220927070450265](https://user-images.githubusercontent.com/3300958/193497044-cbaa4914-8519-40a2-8744-9a137b90958c.png)

1. Platarforma para manejar activos (criptomonedas) dentro del Blockchain
2. Se pueden crear diferentes vaúles seguros (Safe) que tienen una dirección (address) propia para poder recibir fondos
3. Estos vaúles pueden realizar transferencias con la aprobación de diferentes personas (multisig). Cada persona involucrada debe firmar de manera separada para poder aprobar una transacción. Firmar esta transacción no incurre en ningún costo.

![img](https://134244847-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MhyEZtd5TVytPJtyS7v-2910905616%2Fuploads%2Fgit-blob-6b2d55c528d4c659bb0c725c4046aa2302962b9a%2Fimage.png?alt=media)

## OpenZeppelin

![image-20220927070739298](https://user-images.githubusercontent.com/3300958/193497039-cb2b77cd-9b1d-4401-8b02-917b9fe8d3c4.png)

1. Provee Smart Contracts base que sirven como los fundamentos para crear otras aplicaciones más complejas.
2. En esencia, provee los implementaciones de los estándares más usados en el desarrollo de Smart Contracts (ERC20, ERC721, ERC1155, ERC777, etc.)
3. Estos Smart Contracts base siguen buenas prácticas y han sido auditados y testeados innumerables veces
4. OZ es aceptado y usado en la industria del Blockchain como un estándar de desarrollo
5. Sigue un desarrollo simple, modular y robusto. Como piezas de lego, se pueden unir y separar según la conveniencia

## OpenZeppelin Defender

![image-20220927071709970](https://user-images.githubusercontent.com/3300958/193497038-137b31f1-6e5a-4e43-b48f-408b40c897d6.png)

1. Son cuatro los principales servicios que ofrece Defender: Admin, Relay, Autotask y Sentinel.
2. Admin: Te permite ejecutar funciones de algún Smart Contract usando credenciales multifirma. Es decir, dos o más cuentas podran firmar una transaccón.
3. Relayer: son intermediarios que pueden tener privilegios para ejecutar smart contracts. Un intermediario consta de una llave privada y dirección (address). Se pueden crear credenciales compartidas por múltiples desarrolladores para usar el mismo intermediario. Se puede automatizar desde el front-end con una librería de NPM.
4. Autotask: desarrolla scripts usando NodeJS que permite ejecutar ciertos métodos en un Smart Contract. Estos scripts se ejecutan en un servidor privado (serverless) a demanda. Se puede llamar a un autotask mediante un web hook (url).
5. Sentinel: Es capaz de escuchar eventos y ejecuciones de funciones provenientes de smart contracts y actuar en consecuencia. Es posible concatenar un sentinel con un autotask. El sentinel puede disparar mensajes de correo electrónico o Slack.

## Remix IDE

![image-20220929222705695](https://user-images.githubusercontent.com/3300958/193497037-7deb6580-8df9-416e-a835-fbf2b75219d0.png)

1. Es una interfaz de desarrollo que permite la creación rápida de Smart Contracts. Es usado normalmente para crear rápidos prototipos o pruebas de concepto de Smart Contracts.
2. Gracias a su gran variedad de compiladores de Solidty, es ideal para debuguear entre diferentes versiones y comprobar lo que funciona.
3. Permite la publicación de Smart Contracts en diferentes blockchain a través de Metamask.
4. Se puede sincronizar el desarrollo local de smart contracts (e.g. en Visual Studio Code) con Remix IDE para propósitos de compilación y publicación

## Mythril (by ConsenSys)

![image-20220929223007352](https://user-images.githubusercontent.com/3300958/193497036-2ad9cb0b-2aae-4bb2-874b-b93f6edf5935.png)

1. Herramienta de análisis de seguridad (vulnerabilidades) para Smart Contracts. Usa el bytecode que se genera al compilar los Smart Contracts.
2. Es utilizado para proceso de auditoría dado que sugiere potenciales vectores de ataque a Smart Contracts. Luego del análisis, esta herramienta señala buenas prácticas usadas para combatir las falencias encontradas.
3. Herramienta gratuita. Se ejecuta en python y la manera más sencilla de usarlo es crear un entorno virtual en PyCharm (gratuito) y ejecutar el comando de mythril que analiza el Smart Contract.
4. Permite crear graphos que muestran las conecciones entre los diferentes Smart Contracts.

**<u>Alchemy/Infura/Moralis</u>**

![image-20220929225715377](https://user-images.githubusercontent.com/3300958/193497034-3992d844-a203-47f0-b16f-5b03d5bd1c9c.png)

1. Son servicios de conexión privado a nodos de blockchain.
2. Incrementan la velocidad de respuesta ante una transacción en el blockchain
3. Disminuye drásticamente los fallos de conexión entre una aplicación decentralizada y el Blockchain

**<u>Etherscan</u>**

![image-20220929234626271](https://user-images.githubusercontent.com/3300958/193497030-622b4c34-6fc7-4948-b9f3-bdc90bc48ff6.png)

1. Es un explorador de bloques y analítica para blockchain. Además permite revisar el código de los smart contracts publicados así como también su verificación.
2. Permite indagar detalles (quién llamó el metodo, qué contrato se llamó, cuánto gas consumió la operación, qué método se ejecutó) de transacciones hash y contratos.
3. Para poder verificar contratos de manera programática, se puede obtener un API KEY y usarlo en librearías como Hardhat.

**<u>Solidity (lenguaje de programación)</u>**

![image-20220930000916248](https://user-images.githubusercontent.com/3300958/193497028-a90f9d7a-0336-4def-b45c-41af0086bec7.png)

1. Solidity es el lenguage de programación preferido entre desarrolladores así como también la gran mayoría de blockchains usan Solidity como su primer lenguage para desarrollar.
2. Es muy parecido a Javascript, C++ y Python. Es estáticamente tipado, soporta herencia de contratos, el uso de librerías y la definición de typos complejos por parte del usuario.
3. El punto de partida es definir una categoría llamada 'contract' (muy parecido al concepto de clase de Java) y crear métodos y variables dentro.
4. Su compilación product bytecode y ABI. El primero es entendido por máquinas y el segundo por seres humanos.
5. Con Solidity se pueden creara contratos de votaciones, subastas, billeteras multifirmas, entre otros.

**<u>Faucets</u>**

![image-20220930001735070](https://user-images.githubusercontent.com/3300958/193497026-dee07fcd-2dba-4835-aadd-6c98f87b80e6.png)

1. Proveen token nativos (ether) que sirven para pagar el gas de las transacciones en el blockchain.
2. Solo las redes Testnet tienen faucets. Cada testnet (mumbai, BSC testnet, Goerli, etc) posee un faucet donde pedir tokens nativos gratuitos.
3. Si se requiren tokens en mayor cantidad se puede contactar directamente a cada Blockchain en Telegram o Discord.

**<u>MythX (auditoría automatizada)</u>**

![image-20220930002626352](https://user-images.githubusercontent.com/3300958/193497023-28e7419d-3308-44b4-855c-75ce8a06e46a.png)

1. Servicio de análisis de Smart Contracts a demanda. A través de una simple interface gráfica, se muestran los resultados del análisis de vulnerabilidades de Smart Contracts.
2. Desde el Visual Studio Code, se puede usar una extensión para enviar a analizar los Smart Contracts. Del mismo modo, existen comandos de terminal para realizar la misma acción

# Proyectos finales

1. Crear un bridge (2 smart contracts + OZ Defender + FE)
2. Afirmaciones Verificables con Insignia (Smart Contract + NFT + Front)
3. Resolver [Ethernaut Challenge](https://ethernaut.openzeppelin.com/) y desarrollar un tutorial para cada nivel 
4. NFT Marketplace (Smart Contracts + NFT collection + FE)

# Encuesta para la selección de equipos

[Clic aquí](https://tally.so/r/nPD01P)