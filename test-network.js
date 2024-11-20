const { ethers } = require("hardhat");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://saigon-testnet.roninchain.com/rpc");
  const network = await provider.getNetwork();
  console.log("Connected to network:", network);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
