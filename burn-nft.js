const { ethers } = require("ethers");

async function burnNFT() {
  try {
    // Initialize the provider
    const provider = new JsonRpcProvider("https://saigon-testnet.roninchain.com/rpc");

    // Replace with your private key
    const privateKey = "0x821e50c7b6b1a8e2d2d2d3767c9759cb6b8e493dd380d6859bb884a9754bc5c2";
    const wallet = new Wallet(privateKey, provider);

    // Replace with your deployed contract's address
    const nftContractAddress = "0x4F4DDe3098B17dA899F1F79F0b1EE66dC6d3ee19";

    // Replace with your NFT contract's ABI
    const nftAbi = ["function burn(uint256 tokenId) public"];

    // Initialize the contract instance
    const contract = new Contract(nftContractAddress, nftAbi, wallet);

    // Token ID to burn
    const tokenId = 1;

    // Estimate gas to ensure the transaction is valid
    const gasEstimate = await contract.estimateGas.burn(tokenId);
    console.log("Gas estimate:", gasEstimate.toString());

    // Burn the NFT
    const tx = await contract.burn(tokenId, { gasLimit: gasEstimate });
    console.log("Transaction sent. Hash:", tx.hash);

    // Wait for confirmation
    const receipt = await tx.wait();
    console.log("Transaction confirmed. Receipt:", receipt);
    console.log(`Successfully burned NFT with Token ID: ${tokenId}`);
  } catch (error) {
    console.error("Error burning NFT:", error);
  }
}

burnNFT();
