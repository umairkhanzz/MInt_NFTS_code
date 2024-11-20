const hre = require("hardhat");

async function main() {
    // Get the deployed contract
    const contractAddress = "0x4F4DDe3098B17dA899F1F79F0b1EE66dC6d3ee19"; // Replace with your deployed contract address
    const metadataURL = "https://ipfs.io/ipfs/QmZWBnsiRqvwCv28rKk5iEEULk29wnUq4GpWNDrPbFmPSP"; // Replace with your metadata URL
    const walletAddress = "0x55a93c091e61f208Cf00c4219aeCf3B47fC5cDa2"; // Replace with the wallet address to mint NFT to

    // Attach to the deployed contract
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const contract = await MyNFT.attach(contractAddress);

    // Mint the NFT
    console.log("Minting NFT...");
    const tx = await contract.mintNFT(walletAddress, metadataURL);
    await tx.wait();

    console.log("NFT Minted Successfully! Transaction Hash:", tx.hash);
}

// Run the script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
