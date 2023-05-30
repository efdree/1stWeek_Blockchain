/**
 * EXERCISE: Encrypted voting
 *
 * Imagine a situation where you want to ensure that the votes in an election are authentic and, indeed, were intended by the voters.
 * Also, you want to ensure that the votes are neither tampered with nor revealed to anyone else.
 *
 * In this voting process, there are three parties. The voters, the election official and the candidates.
 * - The voters will vote for a candidate
 * - The election official will verify that the votes are authentic
 * - The candidates are the ones that will be elected
 *
 * The voters will sign his vote with his private key and encrypt it with the election official's public key.
 * All the votes are collected within an array and sent to the election officials.
 * The election official will decrypt each vote with his private key and verify that the vote is authentic.
 *
 * Steps:
 * 1. Create a method called 'encryptVote'. This method encrypt avote with the election official's public key.
 *    Parameters:
 *      - The private key of the voter (string)
 *      - The name of the candidate (string)
 *      - The election official's public key (string)
 *    Return value:
 *     - The encrypted payload comprised of vote and signature (string)
 * 
 * Run the tests with the following command:
 * npx hardhat test test/voting.ts
 */

import {
    sign,
    encryptWithPublicKey,
    hash,
    cipher,
    decryptWithPrivateKey,
    recoverPublicKey,
} from "eth-crypto";

export async function encryptVote(
    voterPrivateKey: string,
    candidate: string,
    officialPublicKey: string
): Promise<string> {
    // 1. Sign the vote with the voter's private key
    const signature = sign(voterPrivateKey, hash.keccak256(candidate));

    // 2. Encrypt the vote and the signature with the official's public key
    const payload = JSON.stringify({
        vote: candidate,
        signature,
    });
    const encrypted = await encryptWithPublicKey(officialPublicKey, payload);

    // 3. Return a stringified version of the encrypted payload
    const encryptedString = cipher.stringify(encrypted);
    return encryptedString;
}

export async function decryptVoteAndCount(
    publicKeyVoters: string[],
    votes: string[],
    officialPrivateKey: string
) {
    const voteCounts: any = {};
    for (const vote of votes) {
        const decrypted = await decryptWithPrivateKey(
            officialPrivateKey,
            cipher.parse(vote)
        );
        const payload = JSON.parse(decrypted);
        const candidate = payload.vote;
        const signature = payload.signature;
        const publicKey = recoverPublicKey(signature, hash.keccak256(candidate));
        if (publicKeyVoters.includes(publicKey)) {
            if (!voteCounts[candidate]) {
                voteCounts[candidate] = 0;
            }
            voteCounts[candidate]++;
        }
    }
    return voteCounts;
}