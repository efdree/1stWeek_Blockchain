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
