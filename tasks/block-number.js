const { task } = require("hardhat/config");

task("block-number", "Pints current block number").setAction(
    async(taskAgs , hre)=>{
        const blockNumber = await hre.ethers.provider.getBlockNumber() ;
        console.log("Current block number: ", blockNumber)   ;   
    }

);
