async function mintNFT() {
    const [deployer] = await ethers.getSigners();
    const nft = await ethers.getContractAt("MyNFT", "0x64AB18a14203FCbDF5098C44e6d6140078c5C090");
    const txn = await nft.mintNFT(deployer.address, "https://myapi.com/metadata/1");
    console.log("NFT minted, transaction:", txn.hash);
}

mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
