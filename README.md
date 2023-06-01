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

   - `$ npx hardhat --network mumbai run scripts/deploy.ts`
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

[Clic aquí](https://tally.so/r/meDE10)

**Author: Lee Marreros**

# CRIPTOGRAFÍA DE LLAVE PÚBLICA (UNA FORMA DE CIFRADO ASIMÉTRICO)

## Pre-introducción: ¿Qué es un método de hasheo?

Es la manera en la cual se puede convertir una cantidad arbitraria de información en un resultado fijo en tamaño.

En blockchain se usan dos métodos de hasheo: el SHA256 y keccak256. Ambos producen 32 bytes o 64 caracteres como resultado.

[Utiliza este playground](https://emn178.github.io/online-tools/sha256.html) para analizar las propiedades 

## Introducción

Las llaves privadas y las llaves públicas son componentes esenciales en el mundo de las criptomonedas como Bitcoin y Ethereum para acceder a sus activos digitales. Comprender lo que significan y cómo se crean es crucial para cualquiera que quiera participar en el mundo de la tecnología blockchain.

Las llaves privadas son como contraseñas que le permiten administrar sus activos digitales dentro de la cadena de bloques. Las llaves públicas se utilizan para verificar las firmas digitales y para derivar la dirección de Ethereum. Al usar las direcciones de Ethereum, puede interactuar con varias aplicaciones creadas sobre cadenas de bloques. En esta sección nos sumergiremos en esos conceptos.

## ¿Qué es una llave privada?

Una llave privada es una contraseña especial que permite el acceso a sus activos. No se puede restablecer, funciona como una firma digital y debe ser difícil de crear.

### Es una contraseña

Una llave privada es como una contraseña especial que le permite controlar su dinero en la cadena de bloques. De la misma manera que usa una contraseña para acceder a una caja fuerte, al usar su llave privada puede acceder a su dinero y asegurarse de que solo usted pueda usarlo.

### Acceso a tu reino

Quien tenga su llave privada, podrá disponer de los activos asociados a esa llave privada. Tus bienes están a voluntad de la otra persona. De aquí podemos entender la frase "no tus llaves, no tu criptografía".

### No se puede restablecer

Las llaves privadas son como contraseñas que no se pueden restablecer. Tienen un carácter insustituible y la necesidad de salvaguardarlos se vuelve muy importante.

### Firma digital

Una llave privada funciona como una firma digital porque se usa para autenticar y autorizar transacciones en una cadena de bloques. Prueba la propiedad de la dirección de Ethereum asociada a ella.

### Difícil creación

El proceso de creación de una llave privada debe ser criptográficamente seguro. Por lo tanto, debe utilizar los algoritmos más avanzados en la generación de valores aleatorios.

### Ejemplo de llave privada

Se compone de una secuencia aleatoria de caracteres. Cuanto más aleatorio, más seguro. Tiene 64 letras.

```
// Ejemplo de llave privada:
621afc7ac8821faa8fb484d9e3a68ba13b6171f01246f8d5f6bc1947e7d5cc8b
```

### Características de una llave privada

- Tiene un tamaño de 32 bytes porque es la entrada de `secp256k1` que es una especie de curva elíptica que se usa en Ethereum para crear una llave pública a partir de una llave privada.

- 32 bytes es lo mismo que 256 bits (1 byte = 8 bits)

  ```
  // 256 bits - cada posición puede tener 0 o 1
  1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
  ```

- Normalmente se representa en valores hexadecimales. Aquí, un solo carácter está representado por 4 bits. Eso significa que una llave privada de 256 bits tendrá 64 caracteres (4 bits = 1 carácter)

  ```
  // longitud de llave privada hexadecimal = 64
  3a44cf0f69716237725da985f003f8de05bc8efc5dcd9430caf2a6d2cd7d98b7
  ```

- En informática, un `nibble` es una unidad de datos que consta de 4 bits y está en formato hexadecimal. Hay un total de 64 "nibbles" en una llave privada. Cada `nibble` tiene 16 valores posibles, como `0 - 9` y `A - F`. Aquí hay una lista de todas las combinaciones posibles de un `nibble`:

  | binario | hexadecimal |
  | ------- | ----------- |
  | 0000    | 0           |
  | 0001    | 1           |
  | 0010    | 2           |
  | 0011    | 3           |
  | 0100    | 4           |
  | 0101    | 5           |
  | 0110    | 6           |
  | 0111    | 7           |
  | 1000    | 8           |
  | 1001    | 9           |
  | 1010    | A           |
  | 1011    | B           |
  | 1100    | C           |
  | 1101    | D           |
  | 1110    | E           |
  | 1111    | F           |

### Seguridad

En lo que respecta a una llave privada, se considera que cuanto más aleatoria sea la llave privada, más segura. Aleatorio significa que sus caracteres son muy diferentes entre sí.

Para crear una llave privada fuerte (aleatoria e impredecible), podríamos usar una sal. La sal es una fuente adicional de aleatoriedad que en criptografía se conoce como entropía. Esta ayuda adicional conduce a la creación de llaves privadas con alta entropía. También se podría usar una contraseña encima de la sal para agregar más entropía.

## ¿Qué es la entropía?

La entropía es una medida de la aleatoriedad o imprevisibilidad de los datos. Una entropía alta significa que los datos son muy difíciles de predecir o adivinar, mientras que una entropía baja significa que los datos son más predecibles y fáciles de adivinar. Al crear llaves privadas, la entropía necesaria para la creación debe ser lo suficientemente alta como para garantizar que la llave privada sea altamente segura.

Ejemplos de llaves privadas con baja entropía:

- Patrones repetitivos:

```javascript
const privateKey =
  "11111111111111111111111111111111111111111111111111111111111111111";
```

- Secuencias predecibles:

```javascript
const llave privada = "1234567890123456789012345678901234567890123456789012345678901234";

const privateKey = "ABCD00000000000000000000000000000000000000000000000000000000000000";
```

### ¿Cómo crear alta entropía?

La entropía no es necesariamente una cantidad o un tamaño. Sin embargo, por lo general, 32 bytes aleatorios tienen suficiente entropía para generar una llave privada segura que es difícil de adivinar o de fuerza bruta.

Hay algunas bibliotecas que nos ayudan a agregar una sal (más entropía) como fuente para crear llaves privadas. Revisaremos la biblioteca `crypto`.

```Javascript
importar {randomBytes} de "crypto";

// Generando una sal (entropía)
const entropía = randomBytes(32);
```

Esa entropía se usará más adelante como entrada para crear una llave privada con alta entropía.

## ¿Por qué una llave privada tiene 32 bytes (256 bits)?

Debido a que es la entrada del algoritmo de curva elíptica `secp256k1`, proporciona un gran grupo de llaves, facilita la realización de operaciones bit a bit, es compatible con otros sistemas y su memoria es eficiente, usable y segura.

### Entrada para `secp256k1`

La criptografía de curva elíptica más utilizada en Bitcoin y Ethereum es `secp256k1`. Este algoritmo se utiliza para calcular una llave pública a partir de una llave privada. El tipo de entrada esperada en ese algoritmo es una llave privada de 32 bytes.

### Piscina grande

Una llave privada de 32 bytes proporciona `2^256` combinaciones posibles, lo que crea un enorme grupo de llaves privadas. Dicha cantidad es mayor que la cantidad de átomos en el universo observable.

### Más fácil de operar

32 bytes es una potencia de 2, lo que significa que es más fácil realizar una operación bit a bit en la llave

### Compatible con otros sistemas

Otros algoritmos criptográficos utilizan una llave privada de 32 bytes, lo que facilita la integración con otros sistemas.

### Memoria eficiente

32 bytes es lo suficientemente pequeño para que las computadoras los almacenen en la memoria y no afecta el rendimiento o los requisitos de almacenamiento en comparación con una llave de mayor tamaño.

### Seguro y utilizable

Hay un equilibrio entre seguridad y usabilidad. Una llave más grande podría ralentizar las operaciones y aumentar los requisitos de almacenamiento.

## ¿Todas las llaves privadas son válidas?

Más probable es que sí. Las posibilidades de generar llaves privadas no válidas son prácticamente nulas. Para ser más precisos, la llave privada debe estar en el rango de `1` a `n - 1` donde `n` es el orden de la curva elíptica. Orden en la curva elíptica significa el número de puntos en la curva. `n` es un número primo y básicamente es una restricción dentro del algoritmo `secp256k1` y cuando se usa un número mayor que el orden `n`, la llave pública no sería correcta y podría comprometer su seguridad.

De acuerdo con [Standards for Efficient Cryptography Group](http://www.secg.org/sec2-v2.pdf) (p.9) con respecto a la curva elíptica `secp256k1`, el orden `n` es igual a ` FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141` que es bastante grande y casi cualquier número de 32 bytes será más pequeño que él.

Sin embargo, una llave privada válida no significa que sea una llave privada segura. Normalmente, una llave con más entropía haría que la llave fuera más segura.

## ¿Cómo crear llaves privadas?

Usaremos el módulo [crypto](https://nodejs.org/api/crypto.html) integrado de nodejs. Dentro de esta biblioteca, hay un método llamado `pbkdf2` que significa `función de derivación de llave basada en contraseña 2`. Este método toma varios parámetros como `contraseña`, `salt`, `número de iteraciones`, `longitud de llave` y tipo de `función hash` para crear una llave privada. Este método `pbkdf2` es determinista, lo que significa que, dados los mismos parámetros, obtendrá el mismo resultado. Este método `pbkdf2` es una práctica estándar de la industria para generar llaves privadas seguras.

Veamos cómo implementarlo:

1. Primero, definimos `salt`, `contraseña`, `número de iteraciones`, `longitud de llave` y tipo de `función hash`. Todos estos parámetros añaden más entropía y hacen más segura la generación de una llave privada:

   1. `salt`: se usa para prevenir ataques mediante el uso de tablas precalculadas
   2. `contraseña`: agrega un secreto específico del usuario al proceso de obtención de llaves
   3. `número de iteraciones` - recomendado al menos 10.000 veces. Fortalece la llave derivada
   4. `longitud de la llave`: necesitamos una salida de 32 bytes, ya que representará nuestra llave privada
   5. `función hash`: por lo general, el `sha256` se usa ampliamente porque es resistente a las colisiones y ha sido bien estudiado

2. Se recomienda usar una `sal` fuerte para agregar más entropía. Para eso, usaremos `randomBytes`. El método `randomBytes` genera "datos pseudoaleatorios criptográficamente sólidos". Por lo general, una entropía de 32 bytes de tamaño es lo suficientemente buena para crear suficiente imprevisibilidad y eso es exactamente lo que `randomBytes(32)` produce.
3. Usaremos otra biblioteca ([generate-password](https://www.npmjs.com/package/generate-password)) para crear contraseñas seguras para evitar ataques de fuerza bruta
4. Con la ayuda del método `pbkdf2` de la biblioteca `crypto`, obtuvimos nuestra llave privada fuerte

`cryptography/learning/1_privateKeys.ts`

```javascript
import { pbkdf2, randomBytes } from "crypto";
import { generate } from "generate-password";

// 1 - defining parameters
var salt = "myrandomsalt";
var password = "mypassword";
var iterations = 100000;
var keyLength = 32;
var hashFunction = "sha256";

// 2 - improving salt
salt = randomBytes(32).toString("hex");

// 3 - improving password
password = generate({
  length: 20,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true,
});

// 4 - generating private key
pbkdf2(
  password,
  salt,
  iterations,
  keyLength,
  hashFunction,
  (err, derivedKey) => {
    if (err) throw err;
    const privateKey = derivedKey.toString("hex");
    console.log("Private key:", privateKey);
  }
);
```

Ahora que tenemos nuestra llave privada, encontraremos una forma de crear una llave pública a partir de la llave privada. Para comprender mejor este proceso, hablaremos sobre qué es una curva elíptica y cómo se usa una curva en la creación de una llave pública a partir de una llave privada.

### Ejercicio

`rainbowTable.ts`

En este ejercicio vamos a reemplazar el proceso complejo de crear una llave privada por el uso de un método hash. El método de hasheo tiene múltiples propiedades por las cuales se usa.

En una rainbow table, se colocan las contraseñas hasheadas más comunes. Cuando se quiere descubrir la contraseña de un valor hasheado, se hashea una contraseña y se compara con todos los valores hasheados de la tabla. Así podría encontrarse la contraseña que pertenece a ese valor hash.

Ejecutar el test al terminar el problema:

`npx hardhat test test/rainbowTable.ts`

## La curva elíptica `secp256k1`

La criptografía de curva elíptica (ECC) es un tipo de criptografía de llave pública y se basa en las propiedades que tienen las curvas elípticas.

### Ecuación

Una curva elíptica genérica tiene la siguiente ecuación: `y^2 = x^3 + ax + b` donde `a` y `b` son constantes. La curva es simétrica alrededor del eje x y tiene un punto en el infinito. El ECC utilizado en Bitcoin y Ethereum (`secp256k1`) es una implementación específica de esa ecuación. Tiene los siguientes valores: `y^2 = x^3 + 7`. Se parece a esto:

![curva-elíptica](https://github.com/leemarreros/criptografia-llave-publica/assets/3300958/74431d6a-19c1-486f-b24b-44e55ed78fb6)

Tenga en cuenta que para averiguar la llave pública, la ecuación ECC `y^2 = x^3 + 7` no se usa directamente. Se utiliza para definir la propia curva sobre la que se produce la multiplicación escalar de puntos y también para garantizar que la llave pública resultante esté en la curva.

### Tamaño de llave

Una de las principales ventajas de ECC sobre RSA (otro sistema de criptografía de llave pública) es que ECC proporciona un alto nivel de seguridad con una llave más pequeña en comparación con RSA. En RSA, el tamaño de llave requerido suele ser de 2048 o 3072 bits, mientras que en ECC se requiere una llave de 256 bits. Eso hace que ECC sea más eficiente y rápido para las operaciones criptográficas sin sacrificar la seguridad.

![image-20230418105134816](https://github.com/leemarreros/criptografia-llave-publica/assets/3300958/460c9684-5732-4810-829f-e2142090abdf)

### Otras curvas

De todas las curvas elípticas, se eligió `secp256k1` para su uso en Bitcoin y otras criptomonedas. Otras curvas que se consideraron son `secp256r1` y `secp384f1`. El primero tiene un tamaño de llave más grande y no es tan rápido como para la multiplicación escalar. El segundo requiere muchos más recursos computacionales y es lento para la multiplicación escalar.

### Irrompible

No hay vulnerabilidades conocidas para descifrar el cifrado hasta el momento. La curva `secp256k1` ofrece un buen equilibrio entre seguridad, rendimiento y tamaño de llave.

Intentar descifrar la llave privada de la llave pública es prácticamente imposible utilizando cualquier método conocido. Un atacante necesitaría probar `2^256` posibles llaves privadas. Eso no es factible usando ningún método computacional. Incluso si una computadora pudiera probar un billón de llaves por segundo, todavía tomaría miles de millones de años adivinar una llave privada.

## ¿Cómo crear una llave pública?

En el contexto de la criptografía de llave pública, la llave pública se deriva de la llave privada. Este proceso implica el uso de la ecuación de la curva elíptica `secp256k1` de forma indirecta. Podemos usar la siguiente fórmula para encontrar la llave pública de la llave privada:

```
P = (d * G) mod p
P: la llave pública
d: la llave privada
G: el punto base de la ECC
p: valor máximo de la llave pública resultante
```

Simplemente, esto significa que la llave pública es el resultado de "multiplicar" una llave privada por una constante `G`. Sobre ese resultado, aplicamos `mod p` para que nunca pase de `p`. Para ser más exactos, el término correcto para "multiplicar" es la multiplicación de puntos en la curva definida por la ecuación `y^2 = x^3 + 7`.

Veamos un proceso paso a paso de cómo sucede esto:

1. Esta curva tiene un punto de partida definido como `G(x, y)`. Se llama el punto base de la curva elíptica. Es fijo y acordado por todas las partes que utilizan esta curva. Los valores de las coordenadas G son los siguientes:

   `x = 55066263022277343669578718895168534326250603453777594175500187360389116729240`

   `y = 32670510020758816978083085130507043184471273380659243275938904335757337482424`

2. Definimos `p` como el valor máximo para envolver las llaves públicas resultantes. Hacemos eso para obtener el tamaño correcto para las llaves públicas. La forma de envolver un valor alrededor de `p` es aplicar `mod p` a ese valor. Veamos el valor de `p`:

   `p = 115792089237316195423570985008687907853269984665640564039457584007908834671663`

   Con respecto a la ecuación `y^2 = x^3 + 7` y `p`, podemos decir que todos los puntos `(x, y)` en la curva deben tener coordenadas que sean números enteros módulo `p`. En otras palabras, la curva solo incluye puntos que podrían incluirse dentro de `p`.

3. Nos dan una llave privada `d` que haremos multiplicación escalar de puntos por 'G'. A partir de ese resultado, aplicaremos `mod p` para que el resultado se mantenga dentro de `p`. Llegaremos a la llave pública.

4. La multiplicación escalar de puntos se realiza sobre la curva. Empiezas con una `G` y luego te mueves a lo largo de la curva hasta completar la multiplicación. El punto final estará en la curva y tendrá una coordenada `x` e `y`.

Hagámoslo en código:

`2_publicKey.ts`

```Javascript
import { ec } from "elliptic";

// From all elliptic curves, we use secp256k1
const curve = new ec("secp256k1");

// Any private key (d)
const pk = "e0eaab0558cac71f5b7efb11668f324000a76ab3843d2e5becfb201cbec97adc";

// Formula: d * G mod p
// 'mul()' method does the modulo operation with 'p'
const publicKey = curve.g.mul(pk);

// This result has the "04" at the beginning that states that both x and y
// coordinates are included
console.log("Public Key:", publicKey.encode("hex"));
// Public Key: 049d4b0a9f4cbdeeb35a328a71d19d0f184665017b6c4a77b3e23e8edcbc850921da6a7859df1797ed2dbda698cbd6f16b62be58fd85d05b1bbb3e9547c8f81127

// Only the x coordinate
console.log("Public key (x):", publicKey.getX().toString(16));
// Public key (x): 9d4b0a9f4cbdeeb35a328a71d19d0f184665017b6c4a77b3e23e8edcbc850921

// Only the y coordinate
console.log("Public key (y):", publicKey.getY().toString(16));
// Public key (y): da6a7859df1797ed2dbda698cbd6f16b62be58fd85d05b1bbb3e9547c8f81127
```

Una vez que obtengamos la llave pública de la llave privada, podremos derivar la dirección de Ethereum de la llave pública. Veamos eso ahora.

## ¿Qué pasa con las direcciones de Ethereum?

La dirección de Ethereum se crea después de la llave privada y la llave pública. Sigamos estos pasos para llegar a la dirección de Ethereum comenzando con la llave pública.

1. En el algoritmo de curva elíptica, la llave pública es un par `(x, y)` que corresponde a un punto en la curva elíptica. `x` e `y` se concatenan después de `04` para crear la llave pública. <u>Nota</u>: Ese `04` deberá eliminarse más tarde. El `04` indica que la llave pública no está comprimida, lo que significa que las coordenadas `x` e `y` de la llave pública están incluidas en la cadena de llave pública.

   `3_ethereumAddress.ts`

   ```javascript
   import { ec } from "elliptic";
   import { randomBytes } from "crypto";
   import { keccak_256 } from "js-sha3";
   
   // // 1 - Initialize the secp256k1 curve
   const curve = new ec("secp256k1");
   
   // 2 - Generating entropy
   const entropy = randomBytes(32);
   // 621afc7ac8821faa8fb484d9e3a68ba13b6171f01246f8d5f6bc1947e7d5cc8b
   
   // 3 - Generate a new key pair
   // (Another way of creating a private and public key)
   const keyPair = curve.genKeyPair({ entropy });
   
   // publicKey = "04" + Point X + Point Y
   // Concatenate X and Y coordinates
   const xEllipticCurve = keyPair.getPublic().getX();
   const yEllipticCurve = keyPair.getPublic().getY();
   const publicKey =
     "04" + xEllipticCurve.toString("hex") + yEllipticCurve.toString("hex");
   
   // Or the equivalent:
   // const publicKey = keyPair.getPublic("hex");
   ```

2. El siguiente paso sería aplicar el algoritmo `keccack256` sobre la `publicKey`. Usaremos la biblioteca `js-sha3` que tiene el algoritmo `keccack256` para hash. Muchas otras bibliotecas tienen el mismo algoritmo.

   ```javascript
   import { keccak_256 } from "js-sha3";
   const hash = keccak_256(Buffer.from(publicKey, "hex").slice(1));
   
   // NOTE:
   // - .slice(1) removes the first byte from the 'publicKey'
   // - that first byte removed is "0x04" that was added previously
   ```

3. Una vez que obtenemos el `hash`, solo nos importan los últimos 20 bytes o los últimos 40 caracteres. Además, dado que está en formato hexadecimal, le agregamos `0x` inicialmente. Esa dirección sería una dirección de Ethereum derivada de la llave pública, que también se deriva de una llave privada.

   ```javascript
   const address = "0x" + hash.slice(-40);
   ```

### Ejercicio

`ethereumAddress.ts`

En este ejercicio se partirá de una llave privada para derivar su Ethereum address.

Para testear usar el comando:

`npx hardhat test test/ethereumAddress.ts`

## ¿Cómo se utilizan las llaves públicas y privadas para enviar información a través de la red?

Las llaves privadas y públicas son herramientas importantes para proteger las comunicaciones y transacciones digitales. Con ellos, puede asegurarse de que el destinatario deseado acceda a sus mensajes y transacciones. Además, lo ayudan a mantener su información confidencial a salvo de posibles atacantes.

Estudiaremos dos casos donde se utilizan llaves públicas y privadas:

1. Llaves públicas y privadas para el cifrado/descifrado
2. Llaves Públicas y Privadas para Firmas Digitales

### Llaves públicas y privadas para cifrado/descifrado

Supongamos que Alice quiere enviar un mensaje secreto a Bob. Este mensaje debe ser confidencial y nadie más podría leerlo. Este mensaje viajará por Internet. Cualquiera podrá ver el mensaje pero nadie podrá entenderlo. Veamos cómo funciona el proceso de cifrado y descifrado:

1. Bob generará una llave pública y privada. Él guarda su llave privada para sí mismo. Comparte su llave pública con todos, incluida Alice.
2. Alice cifrará el mensaje secreto utilizando la llave pública de Bob. Este mensaje cifrado se envía a través de Internet y un nybode es capaz de verlo.
3. Bob recibirá el mensaje encriptado. Sin embargo, él será el único en descifrar el mensaje utilizando su llave privada que solo él conoce.

Implementemos este proceso en código:

Para cifrar y descifrar usaremos la biblioteca `eth-crypto` porque proporciona dos métodos útiles llamados `encryptWithPublicKey` y `decryptWithPrivateKey`. La biblioteca `elliptic` solo se usa para generar la llave pública y privada, pero cualquier otra biblioteca que genere esas llaves sería suficiente.

`4_encryption.ts`

```javascript
import { encryptWithPublicKey, decryptWithPrivateKey } from "eth-crypto";
import { ec } from "elliptic";

const EC = new ec("secp256k1");
// 1 - Bob generate a key pair
const bobKeyPair = EC.genKeyPair();

async function encryptDecryptMessage() {
  const message = "Hello Bob, this is a confidential message";

  // 2 - Alice encrypts a message using Bob's public key
  const encryptedMessage = await encryptWithPublicKey(
    bobKeyPair.getPublic("hex"),
    message
  );

  // Anybody is able to see the encrypted message across the network
  console.log("Encrypted message", encryptedMessage);
  // Encrypted message { ... }

  // 3 - Bob decrypts the message using his private key
  const decryptedMessage = await decryptWithPrivateKey(
    bobKeyPair.getPrivate("hex"),
    encryptedMessage
  );

  console.log(decryptedMessage);
  // Output: Hello Bob, this is a confidential message
}

encryptDecryptMessage();
```

### Llaves Públicas y Privadas para Firmas Digitales

Supongamos que Alice quiere enviar un mensaje a Bob. En este caso, Alice quiere probar que ella escribió ese mensaje y también que el mensaje que Bob recibirá es el mismo que Alice pretendía. No es necesariamente importante si alguien puede ver el mensaje que se envía. Es más importante probar que Alice realmente lo está enviando. Veamos cómo ayuda una sinatura digital:

1. Alice generará una llave pública y privada. Mantiene su llave privada y comparte su llave pública con cualquiera, incluido Bob.
2. Alice crea un hash del mensaje usando el algoritmo `keccak256`
3. Alice firma el mensaje cifrado con su llave privada para crear la firma. Esta firma se envía junto con el mensaje cifrado a cualquier persona, incluido Bob.
4. Bob podrá recuperar la dirección de Ethereum o la llave pública de Alice a partir de la firma y el mensaje cifrado.

Vamos a implementarlo en código:

Para esta biblioteca también usaremos la biblioteca `eth-crypto`. Para crear la llave pública y privada, existe un método útil llamado `createIdentity`. Para crear la firma usaremos `sign`. Los métodos `recover` y `recoverPublicKey` nos ayudan a obtener la dirección de Ethereum o la llave pública de la firma y el mensaje cifrado, respectivamente.

`5_digitalSignature.ts`

```javascript
import {
  hash,
  createIdentity,
  sign,
  recover,
  recoverPublicKey,
} from "eth-crypto";

// 1 - Alice creates her identity (public and private keys)
const alice = createIdentity();

// 2 - Alice writes a message and hashes it
const message = "Hello Bob, this message is from Alice.";
const hashedMessage = hash.keccak256(message);

// 3 - Alice signs the message with her private key
const signature = sign(alice.privateKey, hashedMessage);

// Alice sends the message and signature to Bob
console.log("Signature:", signature);
console.log("Hashed Message:", hashedMessage);

// ETHEREUM ADDRESS
// 4 - Recover the Ethereum address from the signature and hashed message
const addressRecovered = recover(signature, hashedMessage);

// Bob checks if the recovered address matches Alice's Ethereum address
if (addressRecovered === alice.address) {
  console.log(`Message from Alice: ${message}`);
} else {
  console.log("Message verification failed!");
}

// PUBLIC KEY
// 4 - Recover the public key from the signature and hashed message
const publicKeyRecovered = recoverPublicKey(signature, hash.keccak256(message));

// Bob checks if the recovered public key matches Alice's public key
if (publicKeyRecovered === alice.publicKey) {
  console.log(`Message from Alice: ${message}`);
} else {
  console.log("Message verification failed!");
}
```

### Combinemos el cifrado/decifrado y firmas digitales

Mediante esta combinación, lograremos dos objetivos. En primer lugar, lograremos que el mensaje secreto sea leído por una sola persona. En segundo lugar, esa persona logrará comprobar quien es el remitente.

`6_BobEncrypts.ts`

```typescript
import {
  recover,
  cipher,
  encryptWithPublicKey,
  decryptWithPrivateKey,
  createIdentity,
  sign,
  hash,
} from "eth-crypto";

/*
   Objetivos:
   - Bob enviará una carta de amor que solo Alice podrá leer.
   - Bob creará una prueba de que él y solo él escribió la carta de amor.
  
   Pasos:
   1. Bob creará una firma con su clave privada y la carta de amor
   2. Se creará un payload que contenga la carta de amor y la firma.
   3. La carga útil se cifrará con la clave pública de Alice.
*/

// Creando identidades únicas para Alice y Bob
const alice = createIdentity();
const bob = createIdentity();

async function encryptingBobMessage() {
  // Bob escribe una carta de amor a Alice
  const loveLetter =
    "My dearest Alice, I love you more than words can express.";

  // 1. Bob creará una firma con su clave privada y la carta de amor
  // hash.keccak256: Hashing transforma un mensaje de longitud arbitraria en una cadena de bits de longitud fija,
  // que luego se puede firmar con nuestra clave privada. Esto evita que un atacante modifique el mensaje.
  // sin invalidar la firma.
  const signature = sign(bob.privateKey, hash.keccak256(loveLetter));
  // 0xe6731b914ed9f9561561e583e888bfa73144048852bcfa280717a839ca28bb6d33f71f68c86dfdb4a37ba090eb18dc6af04384a4162a66c61aa6a3ccec43b6881c

  // 2. Se creará un payload que contenga la carta de amor y la firma
  const payload = JSON.stringify({
    message: loveLetter,
    signature,
  });

  // 3. La carga útil se cifrará con la clave pública de Alice
  const encryptedObject = await encryptWithPublicKey(alice.publicKey, payload);
  // {
  //   iv: 'e6ee1a4595fd512c9e8d8d623fee4428',
  //     ephemPublicKey: '04806ff7f8be411a856e7e0a433c5a6f7ae3aca6cc496e89ce77f0b6caab58d587bd0faaaf09eeaa4be2002f1ff385dbbab32a6806d3e7f67c8e2b8278df9b26d7',
  //       ciphertext: '5d4797bb41e9f5a541ff580407091a063faa55086073b9c72bfe236e0799ccebcf2c342873b80434e1cfbba67bbc75698430797a44ebcdb11b1a96e362574ac840f15483665e01460ebf5867126df70204fc9a017c20b5f00d0168dd675357ab650ff09de8b685e9fc21b67c4bd2c7837be0a6c3a9826c41dc3ae4d133cb5df62d33c89bcce154031aebe05a4ff609eb1c2482c5bf3327e5355b245f3d262c8e27c3e860b0ec4803216c1ddabaa8c76f876b75084f01dadf31441d3b7a86fa93ad77f3a1794d1c5c73fb1cabd28a99e8e48ab87c497db1523f826bdd4bea6da7',
  //         mac: '00aca8e5add1dcf409cbe84773b8f1351119c547e94d9bdea546258da47dc1ac'
  // }

  // El resultado del objeto cifrado se convierte en una cadena
  const encryptedString = cipher.stringify(encryptedObject);
  // e6ee1a4595fd512c9e8d8d623fee442803806ff7f8be411a856e7e0a433c5a6f7ae3aca6cc496e89ce77f0b6caab58d58700aca8e5add1dcf409cbe84773b8f1351119c547e94d9bdea546258da47dc1ac5d4797bb41e9f5a541ff580407091a063faa55086073b9c72bfe236e0799ccebcf2c342873b80434e1cfbba67bbc75698430797a44ebcdb11b1a96e362574ac840f15483665e01460ebf5867126df70204fc9a017c20b5f00d0168dd675357ab650ff09de8b685e9fc21b67c4bd2c7837be0a6c3a9826c41dc3ae4d133cb5df62d33c89bcce154031aebe05a4ff609eb1c2482c5bf3327e5355b245f3d262c8e27c3e860b0ec4803216c1ddabaa8c76f876b75084f01dadf31441d3b7a86fa93ad77f3a1794d1c5c73fb1cabd28a99e8e48ab87c497db1523f826bdd4bea6da7

  return encryptedString;
}

/*
   Objetivos:
   - Alice es la única que puede descifrar el mensaje para leerlo usando su clave privada
   - Alice demostrará que Bob y solo él fue quien escribió la carta de amor usando su clave pública
  
   Pasos:
   1. Alice descifrará el mensaje usando su clave privada para leer la carta de amor
   2. La carga útil se convertirá nuevamente en un objeto al analizarlo
   3. Al usar la firma y el mensaje cifrado, Alice puede recuperar la dirección del remitente (Bob)
   */
async function decryptingBobMessage() {
  // La cadena cifrada se convierte de nuevo en un objeto
  const encrypted = cipher.parse(await encryptingBobMessage());

  // 1. Alice descifrará el mensaje usando su clave privada para leer la carta de amor
  const decrypted = await decryptWithPrivateKey(alice.privateKey, encrypted);

  // 2. La carga útil se convertirá de nuevo en un objeto al analizarlo
  const decryptedPayload = JSON.parse(decrypted);
  // {
  //   message: "My dearest Alice, I love you more than words can express.",
  //     signature:
  //   "0xface55103466a7e007720d324a2d903d18a6bf9c0952fced05d256829a81ca4475539df601cc9bc0726a98e022f694d69cc512e4678e55ced8c09b29a38d9cdc1c",
  // };

  // 3. Mediante el uso de la firma y el mensaje cifrado, Alice puede recuperar la dirección del remitente (Bob)
  const senderAddress = recover(
    decryptedPayload.signature,
    hash.keccak256(decryptedPayload.message)
  );
  // 0xD7a93D79Fe63332A54a5aad34EeE5d919220abd7

  console.log(`Message is: ${decryptedPayload.message}`);
  console.log(`Was sent by Bob: ${senderAddress === bob.address}`);
}

decryptingBobMessage();
```

Pad día #1

https://pad.riseup.net/p/clase-dia1-bootcamp

Pad día #3

https://pad.riseup.net/p/clase-dia3-bootcamp

## Hash table en contratos inteligentes

### Es como un diccionario

Podemos imaginar que mapping es como un diccionario. Cada vez que quieres saber la definición de una palabra lo buscas en la lista y al encontrarla, obtienes el significado de dicha palabra. Mapping en Solidity es una lista que conecta dos valores: una llave y el valor (de dicha llave). En el caso del diccionario, se conecta la palabra con su significado. Por lo tanto, la palabra sería la llave y el significado sería el valor asociado a esa llave.

Entonces podemos decir que mapping en Solidity es una estructura de datos que guarda la información en base a llaves y valores. Tanto las llaves como los valores asociados a esas llaves pueden ser de diferentes tipos de datos con pequeñas limitaciones.

### Mapping en javascript

En `javascript` podemos crear un `mapping` de la siguiente manera:

```javascript
var diccionario = {}
diccionario["computadora"] = "Máquina electrónica";
```

Al hacer esto, hemos asociado la llave `computadora` con el valor de `Máquina electrónica`. Cuando queremos solicitar el valor de esta llave, realizamos lo siguiente:

```javascript
console.log(diccionario["computadora"]); // Máquina electrónica
```

Es decir, accedemos al valor asociada a dicha llave pasando la llave al `mapping`.

### Mapping en Solidity

Sin embargo, en Solidity debemos definir los tipos de datos a usar dentro del `mapping`. Dado que para este ejemplo estamos usando un tipo de dato `string` para la llave y un tipo de dato `string` para el valor asociado a esa llave, hacemos lo siguiente. Veamos:

```solidity
mapping(string => string) diccionario;
diccionario["computadora"] = "Máquina electrónica";
```

El tipo de datgo `mapping` en solidity es una de las estructuras de datos más usados en Solidity. Podemos definirlo de manera genérica del siguiente modo:

```
mapping(KeyType => ValueType) mappingName;
```

Los tipos de data para llave y su valor asociado son definidos de antemano.

### Tipos de datos para llave y su valor

Veamos la lista de tipos de dato tanto para las llaves como para los valores asociados a cada llave:

| Types                     | Key Type | Value Type |
| ------------------------- | -------- | ---------- |
| boolean (bool)            | ✅        | ✅          |
| integer (uint256)         | ✅        | ✅          |
| unsigned integer (int256) | ✅        | ✅          |
| address                   | ✅        | ✅          |
| string                    | ✅        | ✅          |
| enum                      | ✅        | ✅          |
| bytes                     | ✅        | ✅          |
| Contract                  | ✅        | ✅          |
| mapping                   | ❌        | ✅          |
| struct                    | ❌        | ✅          |
| array types               | ❌        | ✅          |

El tipo de dato para las llaves son más limitadas. Sin embargo, para el valor de las llaves puede tomar cualquier tipo de datos.

### Es parte del storage

Los `mapping` solo pueden tener la ubicación de `storage` dentro de la estructura de un contrato inteligente. No pueden ser usados como argumentos o valores de retorno de funciones públicas.

### Getter automático

En la definición de un `mapping` se puede incluir un modificador de su visibilidad de la siguiente manera:

```solidity
mapping(string => string) public diccionario;
```

Al incluir el visibilizador de `public`, Solidity crea automáticamente un método para obtener información del `mapping`. Es decir, Solidity creará un `getter`. El argumento de este método `getter` será la llave del mapping y el valor de retorno será el valor asociado a dicha llave.

### Nombre de llave y nombre del valor

De manera opcional, se puede incluir en la definición de un `mapping` los nombres para la llave y su valor de la siguiente manera:

```solidity
mapping(string palabra => string definicion) diccionario;
```

Esto agrega mayor experiencia de usuario para el usuario porque puede entender con mayor claridad de qué trata la llave y su valor asociado.

### Inicialización de un `mapping` 

Cuando un `mapping` se define, automáticamente todos los valores asociados a cada una de las llaves del `mapping` también se inicializan a un valor por defecto (definido por Solidity). El valor de inicialización dependerá del tipo de dato usado. Veamos unos ejemplos:

```solidity
// mapping que va de un entero a un entero
mapping(uint256 => uint256) integerToInteger;

// solicitemos valores
integerToInteger[123]; // 0
integerToInteger[456]; // 0

// mapping que va de un string a un bool
mapping(string => uint256) stringToInteger;

// solicitemos valores
stringToInteger["cualquier valor"]; // ""
stringToInteger["otro valor"]; // ""
```

La inicialización automática en Solidity deviene en que no existe la posibilidad de encontrar valores sin definir del tipo `undefined` como sí lo hay en otros lenguajes de programación.

### Longitud e iteración de un `mapping`

No se puede iterar sobre un `mapping`. Ello porque por defecto todo el mapping se inicializa y no se lleva la cuenta de aquellos valores que ya se guardaron y cuales no. Dado que no se puede sabar qué llaves se actualizaron, tampoco podemos saber la longitud de un `mapping`.

Se puede crear otra estructura de datos adicional al `mapping` para llevar la cuenta de las llaves que se están inicializando. Típicamente esta estructura de dato es un array.

Para eliminar la información de un `mapping` necesariamente se tiene que saber la llave que se busca limpiar. Lo hacemos de la siguiente manera:

```solidity
mapping(uint256 => uint256) integerToInteger;
mapping[123] = 123;
delete mapping[123];
mapping[123]; // 0
```

Con `delete` borramos la llave y el valor asociado a dicha llave. La siguiente vez que se consulta dicha llave se encontrará su valor de inicialización por defecto.

### Ejercicio

Resolvamos el siguiente ejercicio usando mappings. Digamos que deseo guardar en el smart contract la siguiente información. Guardaré el saludo de cada persona que me visite. La tabla luce como la siguiente:

| Nombre (key) | Saludo (value)   |
| ------------ | ---------------- |
| Juan         | Hola, soy Juan   |
| Maria        | Hola, soy Maria  |
| Jose         | Hola, soy Jose   |
| Carlos       | Hola, soy Carlos |
| Alicia       | Hola, soy Alicia |

`Mapping_2.sol`

Solución en Solidity:

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

contract Mapping {
    mapping(string => string) listaSaludosPorNombre;

    function guardarSaludoPorNombre(
        string calldata _nombre,
        string calldata _nuevoSaludo
    ) public {
        // guardando en el mapping;
        listaSaludosPorNombre[_nombre] = _nuevoSaludo;
    }

    function obtenerSaludoPorNombre(
        string memory nombre
    ) public view returns (string memory) {
        return listaSaludosPorNombre[nombre];
    }

    function borrarSaludo(string memory nombre) public {
        delete listaSaludosPorNombre[nombre];
    }
}
```

### Double Mapping o mapping anidados

La estructura de datos `mapping` tambien puede tener otro `mapping` anidado. Ello permite guardar información más compleja. Un `mapping` anidado se asemeja mucho a una matriz de información o a una tabla de doble entrada. Es decir, dos valores (una fila y una columna) apuntarían a un tercer valor. Se crearía una coordenada (`x`  `y`) con un valor `z` en dicha coordenada.

### Ejemplo

En un salón de clases el profesor quiere llevar un registro de las notas de cada una de las materias de sus alumnos. Se da cuenta que tiene una lista alumnos y cada alumno tiene una lista de diferentes materias. Además, cada materia tiene diferente nota. Entonces aquí hay tres valores que registrar:

* El nombre de cada alumno (supongamos que el nombre está representado por el tipo de dato `address`)
* Las materias por cada alumno
* Las notas por cada materia

Podemos crear una matriz como la siguiente:

|               | Historia | Lengua | Matematica | Geografia |
| ------------- | -------- | ------ | ---------- | --------- |
| Juan (0x01)   | 20       | 20     | 20         | 20        |
| Maria (0x02)  | 20       | 20     | 20         | 20        |
| Carlos (0x03) | 20       | 20     | 20         | 20        |
| Sara (0x04)   | 20       | 20     | 20         | 20        |

A cada nota le corresponde dos coordenadas: el nombre del alumno y una materia. Veamos como implementar esto en Solidity:

```solidity
// Podría empezar a construir lista solo con las materias y sus notas
// materia => notas
mapping(string => uint256) materiaYNotas;

// Para Juan
materiaYNotas["Historia"] = 20;
materiaYNotas["Lengua"] = 20;
materiaYNotas["Matematica"] = 20;
// ...

// Ahora puedo usar este mismo mapping para cada alumno
// Es decir, cada alumno tendrá un mapping de materiaYNotas
// alumno => materiaYNotas
mapping(address => materiaYNotas) notasPorAlumno;

// Guardando información
notasPorAlumno[0x01]["Historia"] = 20;
notasPorAlumno[0x02]["Historia"] = 20;
notasPorAlumno[0x03]["Matematica"] = 20;
// ...

// Ahora puedo crear un mapping anidado directamente
mapping(address => mapping(string => uint256)) notasPorAlumno;

// Le puedo agregar nombres a las llaves y valores
mapping(address alumno => mapping(string materia => uint256 nota)) notasPorAlumno;
```

El doble mapping es Smart Contracts es usando frecuentemente y cabe ahondar en su entendimiento y uso. Si hablamos de base de datos, esta relación podría considerarse _one-to-many_. Veamos el siguiente ejemplo:

### Ejercicio

En este ejercicio terminemos de crear los setters y getters para este `mapping`. Definamos métodos para poder guardar, consultar y borrar información del `mapping` anidado.

`DoubleMapping_3.sol`

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

contract DoubleMapping {
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
```

## Excepciones (Errores) y su propagación

Solidity usa excepciones para manejar errores. En la situación en que una función llama a otras funciones, una excepción también puede detonarse y el error llegará a la superficie. Cuando estas excepciones son disparadas podría ir acompañado de información adicional.

### Revierten el estado

Estas excepciones revierten cualquier cambio de estado realizado durante la transacción en donde se dan estas excepciones. Es decir, o bien toda la transacción se procesa y se realizan todos los cambios de estado, o bien se revierten todos los cambios si es que una excepción se dispara.

### La excepción `require`

Era una de las formas más usadas para manejar las excepciones en Solidity. Sin embargo, `require` le está dando lugar a `revert` y los errores personalizados. 

Normalmente se usa para validar los inputs del usuario, valores de variables o los valores de retornos de otros sub métodos. Suelen ir al inicio de los métodos.  Valida condiciones durante la ejecución del smart contract.

```solidity
// Sintaxis:
require(condición); // condición es 'bool'
require(condición, mensaje_de_error); // mensaje_de_error es 'string'
```

* `condición`: es una expresión booleana. Puede llevar otros operadores booleanos como `||`, `&&`, `>`, `<`, `<=`, `>=`, `!=` para poder evaluar múltiples condiciones.
* `mensaje_de_error`: en caso la condición resulte en `false` se interrumpe la ejecución y se dispara la excepción con dicho mensaje de error. Es opcional.

```solidity
// Ejemplo:
require(owner == msg.sender, "No es el duenio");
require(!isPaused, "Esta pausado");
```

La excepción `require` crea un error del tipo `Error(string)`. Consume todo el gas hasta el momento en que se dispara el `require`. El gas consumido no es devuelto al usuario pero el restante sí.

### La excepción `revert` y errores personalizados 

Se usa en la misma situaciones que `require`. Solo difiere en la sintaxis y permite crear errores con nombres personalizados. El `revert` no tiene una validación dentro de la función sino que depende del desarrollador incluir las validaciones antes de llamar al `revert`. Ejecutar el `revert` solo lanza la excepción con el mensaje de error.

```solidity
// Sintaxis con mensaje de error:
revert(mensaje_de_error);

// Sintaxis sin mensaje (compatibilidad hacia atrás):
revert();

// Sintaxis con error personalizado:
error ErrorPersonalizado();
revert ErrorPersonalizado();

// Sintaxis con error personalizado y argumentos:
error ErrorPersonalizado(string _error);
revert ErrorPersonalizado("Mensaje de error");

// Validación aparte:
if (!condition) revert ErrorPersonalizado();
```

Cuando se usa un error personalizado será más económico que usar un error con un mensaje de error. En el caso del error personalizado se puede user el mismo nombre del error para describirlo. Este nombre ocupa solo 4 bytes.

```solidity
// Ejemplo
// require(owner == msg.sender, "No es el duenio");
if (owner != msg.sender) revert("No es el duenio");

// require(!isPaused, "Esta pausado");
// usando custom error
error EstaPausado();
if (isPaused) revert EstaPausado();
```

Cuando se llama `revert()` genera un error sin información.  Cuando se llama`revert("mensaje de error")` se crea un error del tipo `Error(string)`. Utiliza el opcode `REVERT` por dentro. Consume todo el gas hasta el momento en que se dispara el `revert`. El gas consumido no es devuelto al usuario pero el restante sí.

### La excepción `assert`

Especialmente usado para **asegurar los invariantes**. Una invariante es **algo que es asumido como siempre verdadero** durante la ejecución de un programa. Son propiedades que nunca cambian. Son también **condiciones que deben permanecer igual durante la vida entera del contrato**. Esto aplica para transacciones, inputs del usuario y valores permanentes guardados dentro del smart contract. Por ejemplo, se puede asegurar que el **precio de un producto siempre será positivo** o que el inventario de un producto nunca será negativo.

No se usa para validar inputs del usuario en las funciones. Típicamente, los `assert` van al final del método. Se utiliza para **controlar la correcta ejecución del código** al final de una función. Los `assert` no son usados de manera seguida. 

```solidity
// Sintaxis
// condición es un bool
// no lleva un mensaje de assert
assert(condición); 
```

Disparar un `assert` implica que hay un bug en el código.

```solidity
// ejemplos
assert(productPrice > 0);

a = b - c;
assert(a <= b);

// la suma de x + y será siempre par
assert((x + y) % 2 == 0);
```

Desde la versión `0.8.0`, la función `assert` crea un error del tipo `Panic(uint256)` cuyo opcode es `REVERT`.  Ello impica además que el gas restante será devuelto al usuario.

<u>Nota:</u> Otras verificaciones que arroja el error del tipo `Panic(uint256)` y el opcode `REVERT` son la división por cero y el overflow aritmético.

En el caso se de una situación en la cual se dispara un `assert` para un smart contract en producción, se recomienda que `assert` debería estar acompañado con otras técnicas como el pausado o la actualización (upgrades) de contratos inteligentes.

### Verificación formal con `assert`

Tener `assert` en el código te permite hacer análisis de Verificación Formal con herramientas como [SMT Checker](https://docs.soliditylang.org/en/v0.8.17/smtchecker.html) or the [K-Framework](https://github.com/kframework/solidity-semantics). Estas herramientas encontrarán caminos en los cuales los `assert` pueden no cumplirse. De esa manera se pueden descubrir más vulnerabilidades en un smart contract.

### Ejercicio

Tomar el ejemplo de `DoubleMapping_3.sol` y completa los siguientes requisitos en relación a `revert` y `require`. Crea dos errores personalizados llamados `NotaIncorrecta` y `AddressZero`. El primer error lleva un argumento llamado `nota` de tipo `uint256`. Implementar `revert` y su equivalente `require` en cada punto.

GUARDAR NOTA:

* 1G - La nota tiene que ser mayor o igual a 0 pero menor o igual a 20

- 2G - El address del alumno no puede ser el address 0: `0x0000000000000000000000000000000000000000`
- 3G - La materia no puede ser un string vacío

BORRAR NOTA:

- 1B - El address del alumno no puede ser el address 0: `0x0000000000000000000000000000000000000000`

`RequireRevert_4.sol`

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

contract RevertRequire {

    mapping(address alumno => mapping(string materia => uint256 nota)) notasPorAlumno;

    error NotaIncorrecta(uint256 nota);
    error AddressZero();

    function guardarNota(
        address _alumno,
        string calldata _materia,
        uint256 _nota
    ) public {
        // 1G - La nota tiene que ser mayor o igual a 0 pero menor o igual a 20
        // require(_nota >= 0 && _nota <= 20, "Nota no esta entre 0 y 20");
        // if (_nota < 0 || _nota > 20) revert NotaIncorrecta(_nota);
        if (_nota < 0 || _nota > 20) revert NotaIncorrecta({nota: _nota});

        // 2G - El address del alumno no puede ser el address 0: 0x0000000000000000000000000000000000000000
        // require(_alumno != address(0), "Address no puede ser 0");
        if (_alumno == address(0)) revert AddressZero();

        // 3G - La materia no puede ser un string vacío
        // if (bytes(_materia).length == 0) revert("Materia esta vacia");
        require(bytes(_materia).length > 0, "Materia esta vacia");

        notasPorAlumno[_alumno][_materia] = _nota;

        // Validar si nuestra lógica de programación es correcta
        // Valida que no haya un bug en el proceso de guardar nota
        // Overkill tener un assert en cada función
        assert(notasPorAlumno[_alumno][_materia] == _nota);
    }

    function obtenerNota(
        address _alumno,
        string calldata _materia
    ) public view returns (uint256) {
        return notasPorAlumno[_alumno][_materia];
    }

    function borrarNota(address _alumno, string calldata _materia) public {
        //  1B - El address del alumno no puede ser el address 0: 0x0000000000000000000000000000000000000000
        // require(_alumno != address(0), "Address no puede ser 0");
        if (_alumno == address(0)) revert("Address no puede ser 0");

        delete notasPorAlumno[_alumno][_materia];
    }

    // NO ES POSIBLE:
    // En Solidity no se puede borrar un mapping completo, solo se puede borrar
    // un elemento del mapping.
    // Para borrar toda una fila se debe borrar elemento por elemento
    // function borrarAlumno(address _alumno) public {
    //     delete notasPorAlumno[_alumno];
    // }
}
```

En el caso del `revert` y `require` el error se propagará y será notado por el usuario en el front-end (dApp) antes de firmar una transacción mediante su billetera. Ejemplo de cómo se vería un error en producción [link](https://mumbai.polygonscan.com/tx/0xc96a8ad2c078065dae2c1fb02cf2590870346e17c5055e5ddc4637eb3f85d977):

![image-20221005063900106](https://user-images.githubusercontent.com/112733805/194439364-dad1caf3-0c8f-47d6-aca6-c12587945d4e.png)

## Ejercicio integrador #1

Problema:

`EjercicioIntegrador_1.sol`

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

/**
 * Ejercicio integrador 1
 *
 * Vamos a usar mappings para manejar la propiedad de activos de usuario.
 * Usaremos los tres niveles de mapping más usados:
 * - single mapping
 * - double mapping
 * - triple mapping
 *
 * 1 - Mapping simple:
 * Usaremos un mapping simple para guardar la cantidad de activos que tiene cada usuario
 * Los usuarios se ven representados por sus billeteras
 * Los cantidad de activos es un número entero
 * mapping(address usuario => uint256 cantidad) public activosSimple;
 * Nota:
 *  - crear un método setter guardarActivoSimple que reciba un address y un uint256
 *  - validar que el address no sea 0x00. Mensaje de error: "El address no puede ser 0x00"
 *
 * 2 - Mapping doble:
 * Usaremos un mapping doble para guardar la cantidad de cada tipo de activo que tiene cada usuario
 * Es decir, un usuario puede tener varios tipos de activos y cada uno de ellos puede tener una cantidad distinta
 * Los usuarios se ven representados por sus billeteras
 * Los activos se represetan con códigos que van del 000001 al 999999
 * La cantidad de activos es un número entero
 * mapping(address usuario => mapping(uint256 activoId => uint256 cantidad)) public activosDouble;
 * Nota:
 *  - crear un método setter guardarActivoDoble que reciba un address, un uint256 y un uint256
 *  - validar que el address no sea 0x00. Mensaje de error: "El address no puede ser 0x00"
 *  - validar que los códigos de activo estén entre 000001 y 999999. Mensaje de error: "Codigo de activo invalido"
 *
 * 3 - Mapping triple:
 * Usaremos un mapping triple para guardar la cantidad de cada tipo de activo que tiene cada usuario de cada ciudad
 * Es decir, en cada ciudad hay un usuario que tiene varios tipos de activos y cada uno de ellos puede tener una cantidad distinta
 * Las ciudades se representan con códigos que van del 000001 al 999999
 * Los usuarios se ven representados por sus billeteras
 * Los activos se represetan con códigos que van del 000001 al 999999
 * La cantidad de activos es un número entero
 * mapping(uint256 ciudadId => mapping(address usuario => mapping(uint256 activoId => uint256 cantidad))) public activosTriple;
 * Nota:
 *  - crear un método setter guardarActivoTriple que reciba un address, un uint256, un uint256 y un uint256
 *  - validar que el address no sea 0x00. Mensaje de error: "El address no puede ser 0x00"
 *  - validar que los códigos de activo estén entre 000001 y 999999. Mensaje de error: "Codigo de activo invalido"
 *  - validar que los códigos de ciudad estén entre 000001 y 999999. Mensaje de error: "Codigo de ciudad invalido"
 *
 * Para manejar los tres errores mencionados:
 * 1 - Validar que el address no sea 0x00
 *      Usar un require con la condición: _usuario != address(0)
 *      (pude ir en un modifier o en el propio método)
 *
 * 2 - Validar que los códigos de activo
 *      Usar un revert
 *
 * 3 - Validar que los códigos de ciudad
 *      Crear un Custom Error llamado CiudadInvalidaError(uint256 ciudadId)
 */

contract Mapping {
    // 1 - Mapping simple
    mapping(address usuario => uint256 cantidad) public activosSimple;

    function guardarActivoSimple(address _usuario, uint256 _cantidad) public {}

    // 2 - Mapping double
    mapping(address usuario => mapping(uint256 activoId => uint256 cantidad))
        public activosDouble;

    function guardarActivoDoble() public {}

    // 3 - Mapping double
    error CiudadInvalidaError(uint256 ciudadId);

    mapping(uint256 ciudadId => mapping(address usuario => mapping(uint256 activoId => uint256 cantidad)))
        public activosTriple;

    function guardarActivoTriple() public {}
}
```
