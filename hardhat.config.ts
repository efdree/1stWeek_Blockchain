import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: process.env.MUMBAI_TESNET_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
      timeout: 0,
      gas: "auto",
      gasPrice: "auto",
    },
  },
  etherscan: { apiKey: process.env.API_KEY_POLYGONSCAN },
};

export default config;
