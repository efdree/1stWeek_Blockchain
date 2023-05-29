import hre, { ethers } from "hardhat";

async function main() {
  const MiPrimerContrato = await ethers.getContractFactory("MiPrimerContrato");
  const miPrimerContrato = await MiPrimerContrato.deploy();

  var tx = await miPrimerContrato.deployed();

  await tx.deployTransaction.wait(5);
  console.log(
    "Mi primer token esta publicado en el address",
    miPrimerContrato.address
  );

  console.log("Empezo la verificaion");
  // script para verificacion del contrato
  await hre.run("verify:verify", {
    address: miPrimerContrato.address,
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
