import { ec } from "elliptic";
import { randomBytes } from "crypto";
import { keccak_256 } from "js-sha3";

// // 1 - Initialize the secp256k1 curve
const curve = new ec("secp256k1");

// 2 - Generating entropy
const entropy = randomBytes(32);
// 621afc7ac8821faa8fb484d9e3a68ba13b6171f01246f8d5f6bc1947e7d5cc8b

// 3 - Generate a new key pair
const keyPair = curve.genKeyPair({ entropy });

// publicKey = "04" + Point X + Point Y
// Concatenate X and Y coordinates
const xEllipticCurve = keyPair.getPublic().getX();
const yEllipticCurve = keyPair.getPublic().getY();
const publicKey =
    "04" + xEllipticCurve.toString("hex") + yEllipticCurve.toString("hex");
// const publicKey = keyPair.getPublic("hex");

const hash = keccak_256(Buffer.from(publicKey, "hex").slice(1)); // Remove first byte (0x04) from the publicKey

// Add the prefix '0x' to the hash and take the last 20 bytes (40 characters) to get the Ethereum address
const address = "0x" + hash.slice(-40);
console.log("Ethereum address: ", address);
