require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("./tasks/block-number");
require("dotenv").config();
require("hardhat-gas-reporter");
require("solidity-coverage");

SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "http://eth.sepolia.exepmle";
PRIVATE_KEY = process.env.PRIVATE_KEY || "0x000000";
ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key";
COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
  solidity: "0.8.18",
  gasReporter: {
    enabled: true,

    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};
