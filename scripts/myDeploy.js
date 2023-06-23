const { ethers, run, network } = require("hardhat");
require("@nomicfoundation/hardhat-verify");
function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying SimpleStorage...");
  let simpleStorage = await SimpleStorageFactory.deploy();
  console.log("Deployment request sent...");
  await simpleStorage.waitForDeployment();
  console.log("Deployment confirmed...");
  console.log(simpleStorage);
  const address = await simpleStorage.getAddress();
  console.log("SimpleStorage deployed to:", address);
  //   console.log("Getting bytecode...", await simpleStorage.getDeployedCode());
  console.log("Verifying SimpleStorage...");
  // const deployTransac = simpleStorage.deploymentTransaction();
  // await deployTransac.wait(6);
  console.log("waiting 1 minute");
  await wait(60000);
  console.log("Waiting done");
  await verify(address, []);
}
async function verify(contractAddress, args) {
  await run("verify:verify", {
    address: contractAddress,
    constructorArguments: args,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
