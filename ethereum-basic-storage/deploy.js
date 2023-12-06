const ethers = require("ethers");
const fs = require("fs");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("http://0.0.0.0:8545");
  const wallet = new ethers.Wallet("privateKey", provider);
  const abi = fs.readFileSync("./Storage_sol_Storage.abi", "utf8");
  const binary = fs.readFileSync("./Storage_sol_Storage.bin", "utf8");
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying contract...");
  const contract = await contractFactory.deploy();
  console.log("Contract address: ", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
