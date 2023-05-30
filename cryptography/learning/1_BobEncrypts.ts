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
  Objectives:
  - Bob will send a love letter that only Alice will be able to read it
  - Bob will create a proof that he and only he wrote the love letter
  
  Steps:
  1. Bob will create a signature with his private key and the love letter
  2. A payload that contains the love letter and the signature will be created
  3. The payload will be encrypted with Alice's public key
*/

// Creating unique identities for Alice and Bob
const alice = createIdentity();
const bob = createIdentity();

async function encryptingBobMessage() {
  // Bob writes a love letter to Alice
  const loveLetter =
    "My dearest Alice, I love you more than words can express.";

  // 1. Bob will create a signature with his private key and the love letter
  // hash.keccak256: Hashing transforms a message of arbitrary length into a fixed-length string of bits,
  // which can then be signed using our private key. This prevents an attacker from modifying the message
  // without invalidating the signature.
  const signature = sign(bob.privateKey, hash.keccak256(loveLetter));
  // 0xe6731b914ed9f9561561e583e888bfa73144048852bcfa280717a839ca28bb6d33f71f68c86dfdb4a37ba090eb18dc6af04384a4162a66c61aa6a3ccec43b6881c

  // 2. A payload that contains the love letter and the signature will be created
  const payload = JSON.stringify({
    message: loveLetter,
    signature,
  });

  // 3. The payload will be encrypted with Alice's public key
  const encryptedObject = await encryptWithPublicKey(alice.publicKey, payload);
  // {
  //   iv: 'e6ee1a4595fd512c9e8d8d623fee4428',
  //     ephemPublicKey: '04806ff7f8be411a856e7e0a433c5a6f7ae3aca6cc496e89ce77f0b6caab58d587bd0faaaf09eeaa4be2002f1ff385dbbab32a6806d3e7f67c8e2b8278df9b26d7',
  //       ciphertext: '5d4797bb41e9f5a541ff580407091a063faa55086073b9c72bfe236e0799ccebcf2c342873b80434e1cfbba67bbc75698430797a44ebcdb11b1a96e362574ac840f15483665e01460ebf5867126df70204fc9a017c20b5f00d0168dd675357ab650ff09de8b685e9fc21b67c4bd2c7837be0a6c3a9826c41dc3ae4d133cb5df62d33c89bcce154031aebe05a4ff609eb1c2482c5bf3327e5355b245f3d262c8e27c3e860b0ec4803216c1ddabaa8c76f876b75084f01dadf31441d3b7a86fa93ad77f3a1794d1c5c73fb1cabd28a99e8e48ab87c497db1523f826bdd4bea6da7',
  //         mac: '00aca8e5add1dcf409cbe84773b8f1351119c547e94d9bdea546258da47dc1ac'
  // }

  // The encryptedObject result is converted to a string
  const encryptedString = cipher.stringify(encryptedObject);
  // e6ee1a4595fd512c9e8d8d623fee442803806ff7f8be411a856e7e0a433c5a6f7ae3aca6cc496e89ce77f0b6caab58d58700aca8e5add1dcf409cbe84773b8f1351119c547e94d9bdea546258da47dc1ac5d4797bb41e9f5a541ff580407091a063faa55086073b9c72bfe236e0799ccebcf2c342873b80434e1cfbba67bbc75698430797a44ebcdb11b1a96e362574ac840f15483665e01460ebf5867126df70204fc9a017c20b5f00d0168dd675357ab650ff09de8b685e9fc21b67c4bd2c7837be0a6c3a9826c41dc3ae4d133cb5df62d33c89bcce154031aebe05a4ff609eb1c2482c5bf3327e5355b245f3d262c8e27c3e860b0ec4803216c1ddabaa8c76f876b75084f01dadf31441d3b7a86fa93ad77f3a1794d1c5c73fb1cabd28a99e8e48ab87c497db1523f826bdd4bea6da7

  return encryptedString;
}

/*
  Objectives:
  - Alice is the only one who can decrypt the message to read it by using her private key
  - Alice will prove that Bob and only him was the one who wrote the love letter by using his public key
  
  Steps:
  1. Alice will decrypt the message using her private key to read the love letter
  2. The payload will be converted back into an object by parsing it
  3. By using the signature and the hashed message, Alice is able to recover the sender's address (Bob)
  */
async function decryptingBobMessage() {
  // The encrypted string in converted back into an object
  const encrypted = cipher.parse(await encryptingBobMessage());

  //  1. Alice will decrypt the message using her private key to read the love letter
  const decrypted = await decryptWithPrivateKey(alice.privateKey, encrypted);

  //  2. The payload will be converted back into an object by parsing it
  const decryptedPayload = JSON.parse(decrypted);
  // {
  //   message: "My dearest Alice, I love you more than words can express.",
  //     signature:
  //   "0xface55103466a7e007720d324a2d903d18a6bf9c0952fced05d256829a81ca4475539df601cc9bc0726a98e022f694d69cc512e4678e55ced8c09b29a38d9cdc1c",
  // };

  //  3. By using the signature and the hashed message, Alice is able to recover the sender's address (Bob)
  const senderAddress = recover(
    decryptedPayload.signature,
    hash.keccak256(decryptedPayload.message)
  );
  // 0xD7a93D79Fe63332A54a5aad34EeE5d919220abd7

  console.log(`Message is: ${decryptedPayload.message}`);
  console.log(`Was sent by Bob: ${senderAddress === bob.address}`);
}

decryptingBobMessage();
