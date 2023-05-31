import { randomBytes } from "crypto"

console.log(randomBytes(32).toString("hex"))
console.log(randomBytes(32).toString("hex"))
console.log(randomBytes(32).toString("hex"))
console.log(randomBytes(32).toString("hex"))
console.log(randomBytes(32).toString("hex"))
console.log("e5b4b224344aca4d8bf861d8b4a428ef9286efc944dae0c1359f367819606653".length)

const privateKey = Buffer.from('11111111111111111111111111111111', 'hex');
console.log(privateKey.toString('hex'))