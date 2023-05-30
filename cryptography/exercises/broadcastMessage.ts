import {
  recover,
  createIdentity,
  sign,
  hash,
  recoverPublicKey,
} from "eth-crypto";

/**
 * EXERCISE 1: CRYPTOGRAPHY
 *
 * Imagine a situation where a node in a peer-to-peer network wants to ensure that the message
 * it received from another node is authentic and, indeed, was intended by the sender.
 *
 * Create two methods that:
 *  - will help the sender node to sign his message
 *  - will help the receiver node to verify the message
 */

interface INode {
  privateKey: string;
  publicKey: string;
  address: string;
}

interface BroadcastMessage {
  message: string;
  signature: string;
  publicKey: string;
}

// @dev - signs a message with the node's private key
// @param node - the node that wants to sign the message
export function signMessage(node: INode, message: string): BroadcastMessage {
  // 1. Sign the message with the node's private key
  const signature = sign(node.privateKey, hash.keccak256(message));

  // 2. Broadcast the message and the signature to the network
  const broadcastMessage = {
    message,
    signature,
    publicKey: node.publicKey,
  };

  return broadcastMessage;
}

// @dev - verifies the message's authenticity
// @param broadcastedMessage - the message that was broadcasted to the network
export function verifyMessage(
  broadcastedMessage: BroadcastMessage,
  nodePublicKey: string
): boolean {
  // Steps:
  // 1. Recover the sender's public key from the broadcasted message
  const senderAddress = recoverPublicKey(
    broadcastedMessage.signature,
    hash.keccak256(broadcastedMessage.message)
  );

  // 2. Compare the recovered public key with the node's public key
  return senderAddress === nodePublicKey;

  // Alternatively, you can use the 'recover' method to get both the public key and the Ethereum address
  // const address = recover(
  //   broadcastedMessage.signature,
  //   hash.keccak256(broadcastedMessage.message)
  // );

  // return address === nodeAddress;
}

// TESTING
const node = createIdentity();
const message = "I sent 1 ETH to Alice";
const signedMessage = signMessage(node, message);
const isVerified = verifyMessage(signedMessage, node.publicKey);
// alternative
// const isVerified = verifyMessage(signedMessage, node.address);
console.log(isVerified);

/**
 * NOTE:
 * - 'recoverPublicKey' returns only the public key
 * - 'recover' returns both the public key and the Ethereum address associated with the public key
 * - The 'recover' method is typically used when you need to verify the address of the signer
 * - 'recoverPublicKey' is used when you only need the public key for some other purpose, such as encrypting a message for the signer
 */
