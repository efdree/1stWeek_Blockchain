/**
 * EJERCICIO: Voto encriptado
 *
 * Imagine una situación en la que desea asegurarse de que los votos en una elección sean auténticos y, de hecho, fueron los que pretendían los votantes.
 * Además, desea asegurarse de que los votos no se alteren ni se revelen a nadie más.
 *
 * En este proceso de votación, hay tres partidos. Los votantes, el funcionario electoral y los candidatos.
 * - Los votantes votarán por un candidato
 * - El funcionario electoral verificará que los votos sean auténticos
 * - Los candidatos son los que serán elegidos
 *
 * Los electores firmarán su voto con su llave privada y lo encriptarán con la llave pública del funcionario electoral.
 * Todos los votos se recogen en un array y se envían a los funcionarios electorales.
 * El funcionario electoral descifrará cada voto con su llave privada y verificará que el voto sea auténtico.
 *
 * Pasos:
 * 1. Cree un método llamado 'encryptVote'. Este método encripta un voto con la llave pública del funcionario electoral.
 * Parámetros:
 * - La llave privada del votante (string)
 * - El nombre del candidato (string)
 * - La llave pública del funcionario electoral (string)
 * Valor devuelto:
 * - El payload cifrado compuesto por voto y firma (string)
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
    voterPrivateKey,
    candidate,
    officialPublicKey
) { }

export async function decryptVoteAndCount(
    publicKeyVoters: string[],
    votes: string[],
    officialPrivateKey: string
) { }
