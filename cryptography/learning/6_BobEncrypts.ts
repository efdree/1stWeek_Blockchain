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
