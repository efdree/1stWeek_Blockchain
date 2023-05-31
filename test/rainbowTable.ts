import { expect } from "chai";
import { hash } from "eth-crypto";

import { findPassword } from "../cryptography/exercises/rainbowTable";
import { mostCommonPasswords } from "../cryptography/exercises/utils";

describe("Finding a password: The Rainbow Table", () => {
    mostCommonPasswords.forEach((password) => {
        it(`Should find the password for ${password}`, () => {
            expect(findPassword(hash.keccak256(password))).to.be.equal(password);
        });
    });

    after(() => {
        console.log(
            "CONGRATS! You have completed the 'Finding a password: The Rainbow Table' exercise!"
        );
    });
});


